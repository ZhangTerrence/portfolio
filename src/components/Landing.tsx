"use client";

import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

export const Landing = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <header className="flex flex-col items-center gap-y-8">
        <motion.h1
          className="text-center text-6xl font-bold text-negative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          Terrence Zhang
        </motion.h1>
        <motion.h2
          className="text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
        >
          Web Developer
        </motion.h2>
        <motion.div
          className="flex gap-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
        >
          <div className="flex items-center gap-x-1 hover:scale-105 hover:text-negative">
            <FiDownload />
            <a href="/static/Resume.pdf" download="TerrenceZhang_Resume.pdf">
              Resume
            </a>
          </div>
          <a
            className="hover:scale-105 hover:text-negative"
            href="https://github.com/ZhangTerrence"
            target="_blank"
          >
            Github
          </a>
          <a
            className="hover:scale-105 hover:text-negative"
            href="https://linkedin.com/in/ZhangTerrence/"
            target="_blank"
          >
            LinkedIn
          </a>
        </motion.div>
      </header>
    </section>
  );
};
