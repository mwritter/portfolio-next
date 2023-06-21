"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { SiGithub } from "react-icons/si";

// TODO: these links need to nav to the right spot

const links = ["contact", "resume"];

const Nav = () => {
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);

  return (
    <nav
      id="Nav"
      className="sticky z-10 top-0  bg-white border-b-2 border-blue-50 md:border-none shadow-sm"
    >
      <div className="grid grid-cols-[1fr,auto] p-10 ">
        <div className="flex gap-2 items-center">
          {pathname !== "/" && (
            <Link href="/">
              <span className="flex gap-2 pr-5 items-center">
                <FaArrowLeft />
                Back
              </span>
            </Link>
          )}
          <SiGithub color="#2374f6" size={20} />
          <Link target="_blank" href="https://github.com/mwritter">
            mwritter
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => {
            setOpened((cur) => !cur);
          }}
        >
          <div className="flex justify-center rounded-full items-center p-2 bg-[#2374f6] hover:shadow-sm">
            {opened ? <IoMdClose color="white" /> : <FaBars color="white" />}
          </div>
        </button>
        <ul
          className={`${
            opened ? "flex" : "hidden"
          }   px-5 py-2 flex-col md:top-0 md:right-0 md:relative md:flex md:flex-row gap-10`}
        >
          {links.map((link) => (
            <Link key={link} href={`/${link}`}>
              <li
                className={`${
                  pathname === `/${link}` ? "bg-[#2374f6] text-white" : ""
                } hover:bg-[#2374f6] hover:text-white hover:cursor-pointer p-2 w-full text-center rounded-md capitalize`}
              >
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
