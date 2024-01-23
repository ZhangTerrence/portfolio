"use client";

import { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import { Project } from "./Project";

export type Project = {
  title: string;
  description: string;
  image: {
    url: string;
    alt_text: string;
  };
  links: {
    site_url?: string;
    github_url: string;
  };
};

export const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsMounted(true);
    }
  }, []);

  const projects: Project[] = [
    // {
    //   title: "Readdit",
    //   description:
    //     "A social media website inspired by Reddit. Fully featured with communities, posts, and comments as well as user authentication and authorization. Built using NextJS and Prisma Postgres.",
    //   image: {
    //     url: "/static/images/Readdit.png",
    //     alt_text: "Readdit image",
    //   },
    //   links: {
    //     site_url: "https://readdit-eta.vercel.app/",
    //     github_url: "https://github.com/ZhangTerrence/readdit",
    //   },
    // },
  ];

  if (!isMounted) return null;

  return (
    <section className="flex h-fit w-screen flex-col items-center justify-center gap-y-4 p-4">
      <h1 className="text-4xl font-bold text-negative">Projects</h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "var(--foreground-primary)",
          secondary: "var(--foreground-primary)",
          cardBgColor: "var(--background-accent)",
        }}
        cardHeight={500}
        classNames={{
          card: "flex flex-col",
        }}
        hideControls={true}
      >
        {projects.map((project, i) => {
          return <Project key={i} project={project} />;
        })}
      </Chrono>
    </section>
  );
};
