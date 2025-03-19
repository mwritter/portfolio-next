import ReactMarkdown from "react-markdown";
import { components } from "./config";

const Markdown = ({ children }: { children: string }) => {
  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
};

export default Markdown;
