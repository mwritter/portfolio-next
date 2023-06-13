import { FaClipboardList, FaKeyboard } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";

const SpecialityCard = ({ icon, header, text }: SpecialityCardProps) => {
  return (
    <>
      <div className="p-10 bg-[#EAF2FF] rounded-md  grid gap-5">
        {icon === "clipboard" && <FaClipboardList />}
        {icon === "keyboard" && <FaKeyboard />}
        {icon === "style" && <IoMdColorPalette />}
        <h3 className="font-semibold text-xl">{header}</h3>
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
