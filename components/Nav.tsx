import Link from "next/link";
import { FaGithub } from "react-icons/fa";

// TODO: these links need to nav to the right spot
const Nav = () => {
  return (
    <div className="grid grid-cols-[1fr,auto] p-10">
      <div className="flex gap-2 items-center">
        <FaGithub size={20} />
        <Link target="_blank" href="https://github.com/mwritter">
          mwritter
        </Link>
      </div>
      <nav>
        <ul className="flex gap-10">
          <li>Specialities</li>
          <li>Clients</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
