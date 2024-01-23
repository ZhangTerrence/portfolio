import Image from "next/image";
import type { Project as ProjectType } from "./Projects";
import { SiGithub } from "react-icons/si";

export const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="flex h-full w-full flex-col justify-between py-4">
      <div className="relative min-h-60 w-full">
        <Image
          className="object-cover"
          src={project.image.url}
          alt={project.image.alt_text}
          fill={true}
        />
      </div>
      <h3 className="text-2xl font-semibold">{project.title}</h3>
      <p>{project.description}</p>
      <div className="flex w-full justify-between gap-x-2">
        <a
          className="flex flex-1 items-center justify-center gap-x-2 rounded-md border p-2 text-lg"
          href={project.links.site_url}
        >
          View Project
        </a>
        <a
          className="flex flex-1 items-center justify-center gap-x-2 rounded-md border p-2 text-lg"
          href={project.links.github_url}
        >
          <SiGithub />
          Github
        </a>
      </div>
    </div>
  );
};
