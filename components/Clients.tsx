import { Resume } from "@/types/Resume";

const Clients = ({ clients }: ClientsProps) => {
  return (
    <div className="text-center p-10 grid justify-center md:text-left md:grid-cols-[auto,1fr] gap-5">
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
          {clients?.map((client) => (
            <li key={client.name}>
              {/* Maybe add client logo */}
              {client.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface ClientsProps {
  clients: Resume["clients"];
}

export default Clients;
