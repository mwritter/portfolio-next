"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { motion } from 'motion/react'

const Header = () => {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "bg-white/10 py-2 px-3 backdrop-blur-lg w-min rounded-md relative",
        "fixed sm:top-10 sm:right-10 max-sm:bottom-5 max-sm:left-1/2 -translate-[50%] z-20",
        "print:hidden",
        styles.header,
      )}
    >
      <ul className="flex gap-5">
        <li>
          <Link
            className={cn("z-1 mix-blend-difference")}
            href="/"
          >
            Landing
          </Link>
        </li>
        <li>
          <Link
            className={cn("z-1 mix-blend-difference")}
            href="/resume"
          >
            Resume
          </Link>
        </li>
        <Indicator active={pathname} />
      </ul>
    </nav>
  );
};

export default Header;


const Indicator = ({active}: {active: string}) => {
  return <motion.li
  animate={active === '/resume' ? {left: "50%"} : {left: 0}}
  className="absolute inset-0 -z-1 w-[50%] rounded-md border border-solid border-white bg-black/50"></motion.li>
}