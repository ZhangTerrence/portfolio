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
  const projects: Project[] = [
    {
      title: "Readdit",
      description:
        "A social media application inspired by Reddit. Fully featured with communities, posts, and comments as well as user authentication and authorization. Built using NextJS and Prisma Postgres.",
      image: {
        url: "/static/images/Readdit.png",
        alt_text: "Readdit image",
      },
      links: {
        site_url: "https://readdit-eta.vercel.app/",
        github_url: "https://github.com/ZhangTerrence/readdit",
      },
    },
    {
      title: "Schedula",
      description:
        "A calendar application built using ReactJS and Supabase. The calendar has a month, week, and day mode as well as allows for adding events and tasks.",
      image: {
        url: "/static/images/Schedula.png",
        alt_text: "Schedula image",
      },
      links: {
        site_url: "https://schedula.vercel.app/",
        github_url: "https://github.com/ZhangTerrence/schedula",
      },
    },
    {
      title: "QXChange",
      description:
        "A forums application built during Rutger's Fall 2023 Hackathon. Lead a team of 4 to build a functioning website within 24 hours. Built using the MERN stack.",
      image: {
        url: "/static/images/QXChange.png",
        alt_text: "QXChange image",
      },
      links: {
        site_url: "https://hackru23-gb9a.vercel.app/",
        github_url: "https://github.com/ZhangTerrence/hackru23",
      },
    },
    {
      title: "Pychess",
      description: "A chess program built using Pygame.",
      image: {
        url: "/static/images/Pychess.png",
        alt_text: "Pychess image",
      },
      links: {
        github_url: "https://github.com/ZhangTerrence/pychess",
      },
    },
    {
      title: "Charify",
      description:
        "A C++ application that converts media files to ascii. So given a image or video, it will convert it to ascii and displayed in the terminal.",
      image: {
        url: "/static/images/Charify.png",
        alt_text: "Charify image",
      },
      links: {
        github_url: "https://github.com/ZhangTerrence/charify",
      },
    },
  ];

  return (
    <section className="flex h-fit w-screen flex-col items-center justify-center gap-y-4 px-4 py-16">
      <h1 className="text-4xl font-bold text-negative">Projects</h1>
      <div className="grid grid-cols-3 gap-8">
        {projects.map((project, i) => {
          return <Project key={i} project={project} />;
        })}
      </div>
    </section>
  );
};
