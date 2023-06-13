import { getIntro } from "@/sanity/sanity-utils";
import Image from "next/image";
import React from "react";

const Hero = async () => {
  const introHero = await getIntro();

  return (
    <div className="grid md:grid-cols-2 p-10 relative overflow-hidden bg-[#EAF2FF]">
      <Image
        className="self-end hidden md:block"
        src={introHero.primaryImage}
        alt=""
        width={460}
        height={455}
      />

      <div className="p-10 flex flex-col gap-10">
        <h1 className="font-semibold text-5xl md:max-w-[25rem] ">
          {introHero.header}
        </h1>
        <p className="lg:max-w-[50rem] leading-loose">{introHero.text}</p>
        <Image
          className="absolute -bottom-[125px] right-10"
          src={introHero.secondaryImage}
          alt=""
          width={335}
          height={260}
        />
      </div>
    </div>
  );
};

export default Hero;
