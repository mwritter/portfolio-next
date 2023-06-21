import { getIntro } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = async () => {
  const intro = await getIntro();

  return (
    <footer
      id="Footer"
      className="z-10 flex-1 fixed bottom-0 overflow-hidden flex justify-between w-full bg-[#EAF2FF]"
    >
      <div className=" w-full overflow-hidden">
        <Image
          className="absolute -top-[200px] left-[100px]"
          src={intro.secondaryImage}
          alt=""
          width={335}
          height={260}
        />
      </div>
      <div className="flex gap-5 p-5 items-center">
        <Link target="_blank" href="https://github.com/mwritter">
          <SiGithub color="#2374f6" size={20} />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/matthew-ritter-a35035154/"
        >
          <SiLinkedin color="#2374f6" size={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
