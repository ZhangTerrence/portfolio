"use client";

import { useEffect, useState } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { motion } from "framer-motion";

export const ThemeToggler = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  const switchTheme = () => {
    if (darkTheme) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    setDarkTheme(!darkTheme);
  };

  return (
    <motion.button
      className="fixed right-0 m-8 text-4xl hover:text-negative max-sm:text-2xl"
      onClick={() => switchTheme()}
      initial={{ bottom: "-100%", opacity: 0 }}
      animate={{ bottom: 0, opacity: 100 }}
      transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
    >
      {darkTheme ? <IoMoonSharp /> : <IoSunnySharp />}
    </motion.button>
  );
};
