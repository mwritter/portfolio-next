import React, { ReactNode } from "react";

const Tempalte = ({ children }: { children: ReactNode }) => {
  return <div className="animate-appear">{children}</div>;
};

export default Tempalte;
