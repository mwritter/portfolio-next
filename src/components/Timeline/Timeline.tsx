import { cn } from "@/utils/cn";
import styles from "./Timeline.module.css";

export type TimelineData = {
  title: string;
  company: string;
  dates: string[];
};

export const data: TimelineData[] = [
  {
    title: "Full Stack Software Engineer",
    company: "Azalia Health",
    dates: ["2019", "2022"],
  },
  {
    title: "Software Engineer",
    company: "Formidable Labs",
    dates: ["2022", "2024"],
  },
  {
    title: "Senior Software Engineer",
    company: "NearForm",
    dates: ["2024"],
  },
];

export const Timeline = () => {
  return (
    <div className="grid md:ml-8 sm:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_2fr] gap-10 sm:gap-4 w-full max-w-[1440px]">
      {data.map((_data, index) => (
        <TimelineSection
          key={_data.title}
          active={index === data.length - 1}
          data={_data}
        />
      ))}
    </div>
  );
};

const TimelineSection = ({
  active,
  data,
}: {
  active?: boolean;
  data: TimelineData;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 md:gap-5 flex-1 max-md:[&:before]:hidden",
        styles["timeline-section"]
      )}
    >
      <div className={cn("flex sm:gap-4 items-center ")}>
        <TimelineDot active={active} />
        <TimelineBar active={active} />
      </div>
      <TimeLineInfo data={data} />
    </div>
  );
};

const TimelineDot = ({ active }: { active?: boolean }) => {
  return (
    <div
      className={cn(
        "sm:h-[50px] sm:w-[50px] rounded-full bg-[var(--accent-color)]/30",
        {
          [styles["timeline-dot-active"]]: active,
          "bg-[var(--accent-color)]": active,
        }
      )}
    ></div>
  );
};

const TimelineBar = ({
  className,
  active,
}: {
  className?: string;
  active?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[5px] bg-light-grey rounded-lg flex-1",
        {
          [styles["timeline-bar-active"]]: active,
          "bg-[var(--timeline-bar-color)]": active,
        },
        className
      )}
    ></div>
  );
};

const TimeLineInfo = ({ data }: { data: TimelineData }) => {
  const [start, end] = data.dates;

  return (
    <div className="ml-[25px] ">
      <p className="text-light-grey">
        {start}
        {end ? ` - ${end}` : null}
      </p>
      <p>{data.title}</p>
      <p className="text-light-grey">{data.company}</p>
    </div>
  );
};
