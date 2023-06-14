"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaGithub, FaXing } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

// TODO: these links need to nav to the right spot
const Nav = () => {
  const [opened, setOpened] = useState(false);

  return (
    <nav className="sticky z-[1] top-0 bg-white  sm:border-b-2 sm:border-blue-50">
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
          <div className="flex justify-center rounded-full items-center p-2 bg-blue-50 hover:shadow-sm">
            {opened ? <IoMdClose /> : <FaBars />}
          </div>
        </button>
        <ul
          className={`${
            opened ? "flex" : "hidden"
          }  bg-white px-5 py-2 flex-col md:top-0 md:right-0 md:relative md:flex md:flex-row gap-10`}
        >
          <li className="hover:bg-blue-50 p-2 w-full text-center rounded-md">
            Specialities
          </li>
          <li className="hover:bg-blue-50 p-2 w-full text-center rounded-md">
            Clients
          </li>
          <li className="hover:bg-blue-50 p-2 w-full text-center rounded-md">
            Contact
          </li>
          <li className="hover:bg-blue-50 p-2 w-full text-center rounded-md">
            Resume
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
