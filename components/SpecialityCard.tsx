import { FaClipboardList, FaKeyboard } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";

const SpecialityCard = ({ icon, header, text }: SpecialityCardProps) => {
  return (
    <>
      <div className="p-10 bg-[#EAF2FF] rounded-md grid gap-5 overflow-hidden shadow-md w-full md:max-w-[500px]">
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
        <div className="">
          <ul>
            {text.map((t) => (
              <li className="m-2">
                <p className="leading-loose">{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

interface SpecialityCardProps {
  icon: string;
  header: string;
  text: string[];
}

export default SpecialityCard;
