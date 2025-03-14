import { Components } from "react-markdown";
import { HighlightedText } from "./blocks/HighightedText/HighlightedText";

export const components: Components = {
  strong: ({ children }) => <HighlightedText>{children}</HighlightedText>,
};
