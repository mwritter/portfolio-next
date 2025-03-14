import Markdown from "../Markdown";

export type SectionTextProps = Array<TextType>;

export type TextType = {
  text: string;
  tag?: "highlighted";
};

const SectionText = ({ markdown }: { markdown: string }) => {
  return (
    <div className="text-light-grey max-w-[600px] text-lg sm:text-[30px]">
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default SectionText;
