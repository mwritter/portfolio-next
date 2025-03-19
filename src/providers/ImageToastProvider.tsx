"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ImageToastContextType = {
  imageSrc?: string;
  setImageSrc: Dispatch<SetStateAction<string | undefined>>;
};

const ImageToastContext = createContext({} as ImageToastContextType);

export const ImageToastProvider = ({ children }: PropsWithChildren) => {
  const [imageSrc, setImageSrc] = useState<string>();

  return (
    <ImageToastContext value={{ imageSrc, setImageSrc }}>
      {children}
    </ImageToastContext>
  );
};

export const useImageToastContext = () => useContext(ImageToastContext);

export const imageSrcMap = new Map([
  ["react", "./react.svg"],
  ["typescript", "./typescript.svg"],
  ["nextjs", "./nextjs.svg"],
  ["nodejs", "./nodejs.svg"],
  ["cloud", "./gcp.svg"],
  ["component libraries", "./storybook.svg"],
  ["site modernization", "./nextjs.svg"],
  ["bachelors degree in computer information systems", "./vsu.svg"],
  ["over a decade", "./decade.svg"],
]);
