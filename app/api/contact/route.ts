import { NextRequest, NextResponse } from "next/server";
import SendGrid from "@sendgrid/mail";

SendGrid.setApiKey(process.env.SENDGRID_API_KEY || "");

type Contact = {
  email: string;
  message: string;
};

export async function POST(request: NextRequest) {
  const body: Contact = await request.json();

  const message = `
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: "matthewwilliamritter@gmail.com",
    from: "noreply@mwritter.me",
    subject: "Portfolio Contact",
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  SendGrid.send(data);

  // TODO: use send grid to send myself an email
  return NextResponse.json({
    status: "success",
  });
}
