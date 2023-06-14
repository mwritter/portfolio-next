import { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiAjv,
  SiBackbonedotjs,
  SiBootstrap,
  SiCss3,
  SiDart,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiRedux,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

// TODO: add these to sanity
const badges = new Map<string, IconType>([
  ["typescript", SiTypescript],
  ["javascript", SiJavascript],
  ["html", SiHtml5],
  ["css", SiCss3],
  ["react", SiReact],
  ["redux", SiRedux],
  ["next", SiNextdotjs],
  ["vue", SiVuedotjs],
  ["backbone", SiBackbonedotjs],
  ["php", SiPhp],
  ["mongoDB", SiMongodb],
  ["firebase", SiFirebase],
  ["node", SiNodedotjs],
  ["bootstrap", SiBootstrap],
  ["tailwind", SiTailwindcss],
  ["python", SiPython],
  ["rust", SiRust],
  ["rust", SiRust],
  ["java", FaJava],
  ["dart", SiDart],
  ["flutter", SiFlutter],
  ["docker", SiDocker],
]);

const BadgeElements = () => {
  const elements = [];
  for (const [title, ReactIcon] of badges) {
    elements.push(
      <div title={title}>
        <ReactIcon opacity={0.2} color="#2374f6" size={32} />
      </div>
    );
  }
  return elements;
};

const Badges = () => {
  return (
    <div className="w-full md:p-10 gap-10 flex flex-wrap justify-center items-center">
      <BadgeElements />
    </div>
  );
};

export default Badges;
