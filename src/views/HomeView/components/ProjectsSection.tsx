import React from "react";
import { PROJECTS } from "@/data/projects";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export const PROJECTS_SECTION_ID = "home-view-projects-section";

export default function ProjectsSection() {
  return (
    <section id={PROJECTS_SECTION_ID} className="py-8">
      <div className="container mx-auto px-4">
        <ProjectsHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsHeader() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-8 text-on-primary dark:text-on-primary-dark">
        Projects
      </h2>
      <span className="block text-center text-lg text-secondary dark:text-secondary-dark mb-12">
        Here are the most recent projects I have worked with
      </span>
    </>
  );
}

function ProjectCard(props: { project: ProjectDatum; index: number }) {
  const { project, index } = props;

  return (
    <div
      key={`home-view-project-${index}`}
      className="flex flex-col items-center bg-surface dark:bg-surface-dark shadow-lg rounded-lg overflow-hidden"
    >
      <ProjectImage imageUrl={project.imageUrl} title={project.title} />
      <ProjectDetails
        title={project.title}
        description={project.description}
        tags={project.tags}
      />
    </div>
  );
}

function ProjectImage(props: { imageUrl: string; title: string }) {
  const { imageUrl, title } = props;
  return (
    <div className="w-full p-6">
      <ResponsiveImage src={imageUrl} alt={title} aspectRatio="aspect-square" />
    </div>
  );
}

function ProjectDetails(props: {
  title: string;
  description: string;
  tags: string[];
}) {
  const { title, description, tags } = props;

  return (
    <div className="w-full p-6">
      <h3 className="text-xl font-semibold mb-4 text-on-primary dark:text-on-primary-dark">
        {title}
      </h3>
      <p className="text-secondary dark:text-secondary-dark mb-4">
        {description}
      </p>
      <ul className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, tagIndex) => (
          <ProjectTag key={tagIndex} tag={tag} />
        ))}
      </ul>
    </div>
  );
}

function ProjectTag(props: { tag: string }) {
  const { tag } = props;

  return (
    <li className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
      {tag}
    </li>
  );
}
