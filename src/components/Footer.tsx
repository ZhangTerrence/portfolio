"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="flex h-40 w-screen flex-col items-center justify-center gap-y-4 border-t"
      initial={{ color: "rgba(0, 0, 0, 0.5)" }}
      whileInView={{ color: "var(--foreground-primary)" }}
      transition={{ ease: "easeOut", duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex gap-x-6 text-4xl">
        <a href="https://github.com/ZhangTerrence" target="_blank">
          <SiGithub />
        </a>
        <a href="https://linkedin.com/in/ZhangTerrence/" target="_blank">
          <SiLinkedin />
        </a>
      </div>
      <p>&copy; 2024 Terrence Zhang</p>
    </motion.footer>
  );
};
