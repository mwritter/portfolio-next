"use client";

import { useImageToastContext } from "@/providers/ImageToastProvider";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef } from "react";

export const ImageToast = () => {
  const { imageSrc, setImageSrc } = useImageToastContext();
  const timerRef = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    if (imageSrc) {
      timerRef.current = setTimeout(() => {
        setImageSrc((current) => {
          if (current === imageSrc) return undefined;
          return imageSrc;
        });
      }, 2000);
    }
    return () => clearTimeout(timerRef.current);
  }, [imageSrc, setImageSrc]);

  return (
    <div className="fixed bottom-10 right-10 h-[100px] w-[100px] grid place-content-center p-2 z-10">
      <AnimatePresence>
        {imageSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            <Image
              key={imageSrc}
              src={imageSrc}
              style={{ zIndex: 100 }}
              width={100}
              height={100}
              alt="Image Toast"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
