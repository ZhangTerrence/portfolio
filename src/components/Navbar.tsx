"use client";

import { motion } from "framer-motion";

export const Navbar = () => {
  const scrollToView = (section: number) => {
    document.getElementsByTagName("section")[section].scrollIntoView();
  };

  return (
    <motion.nav
      className="fixed inset-x-0 -top-full z-50 mx-auto flex h-16 w-screen items-center justify-end p-4 opacity-0 backdrop-blur"
      animate={{ top: 0, opacity: 100 }}
      transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
    >
      <ul className="flex justify-center gap-x-8 px-2 text-xl">
        <li className="cursor-pointer" onClick={() => scrollToView(1)}>
          About
        </li>
        <li className="cursor-pointer" onClick={() => scrollToView(2)}>
          Projects
        </li>
        <li className="cursor-pointer" onClick={() => scrollToView(3)}>
          Contact
        </li>
      </ul>
    </motion.nav>
  );
};
