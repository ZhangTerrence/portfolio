"use client";

import Image from "next/image";
import { type Project as ProjectType } from "./Projects";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { type Variants, motion } from "framer-motion";

export const Project = ({
  variant,
  project,
}: {
  variant: Variants;
  project: ProjectType;
}) => {
  return (
    <motion.div
      className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border-2 border-primary duration-300 hover:text-negative"
      variants={variant}
    >
      <div className="relative h-60 w-full">
        <Image
          className="object-contain"
          src={project.image.url}
          alt={project.image.alt_text}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex grow flex-col justify-between gap-y-4 p-4">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="flex w-full justify-between gap-x-2">
          {project.links.site_url && (
            <a
              className="flex flex-1 items-center justify-center gap-x-2 rounded-md border border-primary p-2 text-lg"
              href={project.links.site_url}
              target="_blank"
            >
              View Project
              <FaExternalLinkAlt />
            </a>
          )}
          <a
            className="flex flex-1 items-center justify-center gap-x-2 rounded-md border border-primary p-2 text-lg"
            href={project.links.github_url}
            target="_blank"
          >
            <SiGithub />
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};
