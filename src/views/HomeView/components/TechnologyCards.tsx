import React from "react";
import { Technology } from "@/types/shared";

export function TechnologyCards(props: { technologies: Technology[] }) {
  const { technologies } = props;

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {technologies.map((technology) => (
        <Card key={technology.name} technology={technology} />
      ))}
    </div>
  );
}

function Card(props: { technology: Technology }) {
  const {
    technology: { name, Icon },
  } = props;

  return (
    <div className="flex flex-col items-center">
      <div
        className={[
          "relative flex justify-center items-center",
          "w-[60px] h-[60px]",
          "bg-white text-secondary rounded-full",
          "shadow-lg",
          "transition-transform duration-300 ease-in-out hover:scale-110",
        ]
          .join(" ")
          .trim()}
      >
        <Icon className="w-[40px] h-[40px]" />
      </div>
      <p className="text-center mt-2 text-sm text-secondary dark:text-secondary-dark">
        {name}
      </p>
    </div>
  );
}
