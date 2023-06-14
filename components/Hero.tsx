import { getIntro } from "@/sanity/sanity-utils";
import { Intro } from "@/types/Intro";
import Image from "next/image";
import React from "react";

const Hero = async ({ introHero }: HeroPorps) => {
  return (
    <div className="grid md:grid-cols-2 md:p-10 overflow-hidden bg-[#EAF2FF]">
      <Image
        className="self-end justify-self-end hidden md:block"
        src={introHero.primaryImage}
        alt=""
        width={460}
        height={455}
      />

      <div className="relative p-10 flex flex-col gap-10 lg:max-w-[50rem]">
        <h1 className="font-semibold text-5xl md:max-w-[25rem] ">
          {introHero.header}
        </h1>
        <p className="leading-loose">{introHero.text}</p>
        <button className="hover:shadow-md self-start bg-[#2374f6] p-2 rounded-md">
          <div className="text-white">Let&apos;s talk</div>
        </button>
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

interface HeroPorps {
  introHero: Intro;
}

export default Hero;
