"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "bg-white/10 py-2 px-3 backdrop-blur-lg w-min rounded-md relative",
        "fixed sm:top-10 sm:right-10 max-sm:bottom-10 max-sm:left-1/2 -translate-[50%] z-20",
        "print:hidden",
        styles.header,
        {
          "[&:before]:translate-x-full": pathname === "/resume",
        }
      )}
    >
      <ul className="flex gap-5">
        <li>
          <Link
            className={cn({
              "text-black": pathname !== "/resume",
            })}
            href="/"
          >
            Landing
          </Link>
        </li>
        <li>
          <Link
            className={cn({
              "text-black": pathname === "/resume",
            })}
            href="/resume"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
