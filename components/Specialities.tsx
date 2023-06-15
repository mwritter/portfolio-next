import React from "react";
import SpecialityCard from "./SpecialityCard";
import Badges from "./Badges";

// TODO: add these to sanity, maybe use cloudinary for badges

const Specialities = () => {
  return (
    <div className="flex flex-col w-full md:p-10 mb-[200px]">
      <div className="self-center text-center max-w-[15rem] mb-10">
        <h2 className="font-semibold text-4xl mb-3">Specialities</h2>
        <p>and some of the technologies Im currently working with</p>
      </div>
      <Badges />
      <div className="p-3 md:mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        <SpecialityCard
          icon="clipboard"
          header="Project Management"
          text="Things about project management that I do."
        />
        <SpecialityCard
          icon="keyboard"
          header="Software Engineering"
          text="Things about project management that I do."
        />
        <SpecialityCard
          icon="style"
          header="UI/UX Design"
          text="Things about project management that I do."
        />
      </div>
    </div>
  );
};

export default Specialities;
