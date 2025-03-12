const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="text-light-grey text-[50px] font-semibold max-w-[400px] leading-tight whitespace-pre">
      {text}
    </h1>
  );
};

export default Heading;
