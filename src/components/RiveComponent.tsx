"use client";

import Rive from "@rive-app/react-canvas";

import React from "react";

export const RiveComponent = ({ src }: { src: string }) => {
  return (
    <div className="animate-appear fixed flex flex-col top-0 right-0 h-screen w-[500px] blur-md sm:blur-xs z-0">
      <Rive src={src} />
      <Rive src={src} />
    </div>
  );
};
