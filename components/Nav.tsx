"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaGithub, FaXing } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

// TODO: these links need to nav to the right spot

const links = ["Contact", "Resume"];

const Nav = () => {
  const [opened, setOpened] = useState(false);

  return (
    <nav className="sticky z-[1] top-0  bg-white border-b-2 border-blue-50 md:border-none shadow-sm">
      <div className="grid grid-cols-[1fr,auto] p-10 ">
        <div className="flex gap-2 items-center">
          <FaGithub size={20} />
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
            <li
              key={link}
              className="hover:bg-[#2374f6] hover:text-white hover:cursor-pointer p-2 w-full text-center rounded-md"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
