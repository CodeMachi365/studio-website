export default function ViewWrapper(props: {
  children: React.ReactNode;
  id: string;
}) {
  const { children, id } = props;

  return (
    <div id={id} className="container w-[90%] mx-auto mt-[3.5rem]">
      {children}
    </div>
  );
}
