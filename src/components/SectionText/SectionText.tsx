import Markdown from "react-markdown";
import { HighlightedText } from "../MarkdownBlocks/HighlightedText/HighlightedText";

export type SectionTextProps = Array<TextType>;

export type TextType = {
  text: string;
  tag?: "highlighted";
};

const SectionText = ({ markdown }: { markdown: string }) => {
  return (
    <div className="text-light-grey max-w-[600px] text-[30px]">
      <Markdown
        components={{
          strong: ({ children }) => (
            <HighlightedText>{children}</HighlightedText>
          ),
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
};

export default SectionText;
