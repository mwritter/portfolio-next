import ContactForm from "@/components/ContactForm";
import { getIntro } from "@/sanity/sanity-utils";
import Image from "next/image";

const ContactPage = async () => {
  const introHero = await getIntro();
  return (
    <div className="mx-auto w-full lg:w-[75%] max-w-[1000px] h-full flex items-center justify-center ">
      <div className="relative overflow-hidden bg-blue-50 rounded-md grid items-center w-full shadow-lg">
        <div className="absolute top-0 lef-10 lg:grid justify-start items-center">
          <Image
            className="self-end justify-self-end md:block"
            src={introHero.primaryImage}
            alt=""
            width={460}
            height={455}
          />
        </div>
        <div className="z-[1]">
          <ContactForm />
        </div>
        <div className="hidden sm:block absolute -bottom-32 right-0 justify-start items-center">
          <Image
            className="self-end justify-self-end"
            src={introHero.secondaryImage}
            alt=""
            width={335}
            height={260}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
