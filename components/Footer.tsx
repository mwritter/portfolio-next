import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = ({ image }: FooterProps) => {
  return (
    <footer className="sm:sticky md:fixed bottom-0 overflow-hidden flex justify-between w-full bg-[#EAF2FF]">
      <div className=" w-full overflow-hidden">
        {image && (
          <Image
            className="absolute -top-[200px] left-[100px]"
            src={image}
            alt=""
            width={335}
            height={260}
          />
        )}
      </div>
      <div className="flex gap-5 p-5">
        <Link target="_blank" href="https://github.com/mwritter">
          <FaGithub color="#2374f6" size={20} />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/matthew-ritter-a35035154/"
        >
          <FaLinkedin color="#2374f6" size={20} />
        </Link>
      </div>
    </footer>
  );
};

interface FooterProps {
  image: string | null;
}

export default Footer;
