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
      <div className="relative h-20 w-20 bg-white rounded-full flex justify-center items-center shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:scale-110">
        <div className="flex justify-center items-center w-12 h-12 text-gray-800">
          <Icon className="w-10 h-10" />
        </div>
      </div>
      <p className="text-center mt-2 text-sm text-gray-600">{name}</p>
    </div>
  );
}
