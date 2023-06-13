import React from "react";

// TODO: put these in sanity with logo
const clients = ["Google", "Chewy", "Comprehensive", "Lululemon"];

const Clients = () => {
  return (
    <div className="p-10 grid justify-center md:grid-cols-[auto,1fr] gap-5">
      <h2
        className="relative md:pl-28 text-4xl font-semibold max-w-[25rem]
        md:after:absolute
        md:after:top-[15%]
        md:after:-left-[50px]
        md:after:rounded-full
        md:after:w-[110px]
        md:after:h-[5px]
        md:after:bg-[#BDCDE6]"
      >
        My Recent Clients
      </h2>
      <div>
        <ul className="grid justify-center md:grid-cols-3 md:ml-10 gap-5 max-w-[500px]">
          {clients.map((client) => (
            <li>
              {/* Added client logo */}
              {client}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Clients;
