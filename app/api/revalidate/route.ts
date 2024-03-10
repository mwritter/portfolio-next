import { NextResponse } from "next/server";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { CacheTags } from "@/utils/cacheTags";

export async function POST(req: Request) {
  try {
    // Get signature header
    const signatureHeader = req.headers.get(SIGNATURE_HEADER_NAME) || "";
    const signature = Array.isArray(signatureHeader)
      ? signatureHeader[0]
      : signatureHeader;

    // Parse body stream, which we'll eventually JSON parse.
    const body = req.body && (await streamToString(req.body));

    if (!body) {
      console.log("Bad body payload");
      return new NextResponse("Bad Input", { status: 400 });
    }

    console.log("received a potential webhook request");

    // Validate signature
    if (!isValidSignature(body, signature, secret)) {
      console.log("revalidate webhook called", { body, signature, secret });
      console.log("unauthorized webhook attempt thwarted 🔒");
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Parse out the body for us to work with.
    const delta = webhookPayloadSchema.parse(JSON.parse(body));
    const tagsToInvalidate = new Set<string>();

    // For all operations, try to invalidate based on type. Better safe than sorry here.
    if (isTypeCacheKey(delta._type))
      tagsToInvalidate.add(CacheTags[delta._type]());

    // Finally, attempt to invalidate the tags
    tagsToInvalidate.forEach((tag) => {
      try {
        revalidateTag(tag);
        console.log(`Invalidated tag ${tag}`);
      } catch (err) {
        console.warn(err);
      }
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      success: false,
      message: err instanceof Error ? err.message : "Unknown error",
    });
  }
}

const secret = process.env.SANITY_WEBHOOK_SECRET ?? "";

/**
 * Based off of the projection configured in Sanity webhook section.
 */
const webhookPayloadSchema = z.object({
  _id: z.string(),
  _type: z.string(),
  slug: z.string().nullable(),
  operation: z.union([
    z.literal("create"),
    z.literal("update"),
    z.literal("delete"),
  ]),
  changedProdReady: z.boolean().nullable(),
  fullRebuild: z.boolean().optional().nullable(),
});

const streamToString = async (stream: ReadableStream<Uint8Array>) => {
  const chunks = [];
  const reader = stream.getReader();

  let { done, value } = await reader.read();
  do {
    if (value !== undefined) chunks.push(value);
    ({ done, value } = await reader.read());
  } while (!done);

  return Buffer.concat(chunks).toString("utf8");
};

const isTypeCacheKey = (key: string): key is keyof typeof CacheTags =>
  key in CacheTags;
