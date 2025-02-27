export default function ViewWrapper(props: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  const { children, id, className = "" } = props;

  return (
    <div
      id={id}
      className={["max-width-container w-[90%] mx-auto mt-[3.5rem]", className]
        .join(" ")
        .trim()}
    >
      {children}
    </div>
  );
}
