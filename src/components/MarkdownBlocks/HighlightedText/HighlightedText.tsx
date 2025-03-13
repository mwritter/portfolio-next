import { PropsWithChildren } from "react";
import styles from "./HighlightedText.module.css";
import { cn } from "@/utils/cn";

export const HighlightedText = ({ children }: PropsWithChildren) => {
  return <span className={cn(`text-white`, styles.shine)}>{children}</span>;
};
