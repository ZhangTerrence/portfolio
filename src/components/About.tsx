"use client";

import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiDocker,
  SiExpress,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { motion } from "framer-motion";

export const About = () => {
  const logos = [
    <BiLogoHtml5 key={0} />,
    <BiLogoCss3 key={1} />,
    <BiLogoJavascript key={2} />,
    <BiLogoTypescript key={3} />,
    <BiLogoReact key={4} />,
    <BiLogoTailwindCss key={5} />,
    <SiNextdotjs key={6} />,
    <SiExpress key={7} />,
    <SiMongodb key={8} />,
    <SiPostgresql key={9} />,
    <SiLinux key={10} />,
    <SiDocker key={11} />,
  ];

  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center gap-y-32 px-4 py-16">
      <motion.div
        className="relative flex flex-col items-center gap-y-4"
        initial={{ opacity: 0, bottom: -50 }}
        whileInView={{ opacity: 1, bottom: 0 }}
        transition={{ ease: "easeOut", duration: 0.75 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-negative">About</h1>
        <p className="w-[50%] text-center text-xl leading-loose">
          Hi, I&#39;m Terrence! I am currently a second-year computer science
          student studying at Stevens Institute of Technology. My primarily
          focus on fullstack web development but I am also interested in
          artificial intelligence as well as machine learning.
        </p>
      </motion.div>
      <motion.div
        className="relative flex flex-col items-center gap-y-4"
        initial={{ opacity: 0, bottom: -50 }}
        whileInView={{ opacity: 1, bottom: 0 }}
        transition={{ ease: "easeOut", duration: 0.75, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-6 gap-8 text-6xl">
          {logos.map((logo_component) => {
            return logo_component;
          })}
        </div>
      </motion.div>
    </section>
  );
};
