export default function TitleWithDivider(props: {
  title: string;
  subtitle?: string;
}) {
  const { title, subtitle } = props;

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      {subtitle && (
        <h3 className="text-center text-secondary dark:text-secondary-dark">
          {subtitle}
        </h3>
      )}
      <div className="h-[1px] w-[90%] md:w-1/2 bg-secondary dark:bg-secondary-dark" />
    </div>
  );
}
