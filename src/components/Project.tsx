import Image from "next/image";
import type { Project as ProjectType } from "./Projects";
import { SiGithub } from "react-icons/si";

export const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="h-full w-full overflow-hidden rounded-xl border-2 duration-300 hover:text-negative">
      <div className="relative h-60 w-full">
        <Image
          className="object-cover"
          src={project.image.url}
          alt={project.image.alt_text}
          fill={true}
        />
      </div>
      <div className="flex flex-col justify-evenly gap-y-4 p-4">
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
    </div>
  );
};
