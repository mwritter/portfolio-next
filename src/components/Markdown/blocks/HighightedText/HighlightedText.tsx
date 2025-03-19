"use client";
import {
  imageSrcMap,
  useImageToastContext,
} from "@/providers/ImageToastProvider";
import styles from "./HighlightedText.module.css";
import { cn } from "@/utils/cn";
import { useMemo } from "react";

export const HighlightedText = ({ children }: { children: string }) => {
  const { setImageSrc } = useImageToastContext();
  const imageSrc = useMemo(() => {
    return imageSrcMap.get(children.toLowerCase());
  }, [children]);

  return (
    <span
      onMouseOver={() => {
        if (imageSrc) setImageSrc(imageSrc);
      }}
      onMouseOut={() => {
        setImageSrc((cur) => {
          if (cur === imageSrc) return undefined;
          return cur;
        });
      }}
      className={cn(`text-white`, styles.shine, {
        "hover:text-white": imageSrc,
      })}
    >
      {children}
    </span>
  );
};
