import { FaClipboardList, FaKeyboard } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import Badges from "./Badges";

const SpecialityCard = ({ icon, header, text }: SpecialityCardProps) => {
  return (
    <>
      <div className="relative p-10 bg-[#EAF2FF] rounded-md grid gap-5 overflow-hidden">
        {icon === "clipboard" && (
          <span className="flex w-[35px] h-[35px]  justify-center items-center rounded-full bg-white">
            <FaClipboardList size={20} />
          </span>
        )}
        {icon === "keyboard" && (
          <span className="flex w-[35px] h-[35px]  justify-center items-center rounded-full bg-white">
            <FaKeyboard size={20} />
          </span>
        )}
        {icon === "style" && (
          <span className="flex w-[35px] h-[35px]  justify-center items-center rounded-full bg-white">
            <IoMdColorPalette size={20} />
          </span>
        )}
        <h3 className="font-semibold text-xl w-min">{header}</h3>
        <p className="mt-10">{text}</p>
      </div>
    </>
  );
};

interface SpecialityCardProps {
  icon: "clipboard" | "keyboard" | "style";
  header: string;
  text: string;
}

export default SpecialityCard;
