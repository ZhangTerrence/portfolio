"use client";

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center gap-y-4 px-4 py-16">
      <motion.h1
        className="relative text-4xl font-bold text-negative"
        initial={{ opacity: 0, bottom: -50 }}
        whileInView={{ opacity: 1, bottom: 0 }}
        transition={{ ease: "easeOut", duration: 0.75 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h1>
      <motion.form
        className="relative flex w-[35%] flex-col gap-y-4"
        initial={{ opacity: 0, bottom: -50 }}
        whileInView={{ opacity: 1, bottom: 0 }}
        transition={{ ease: "easeOut", duration: 0.75 }}
        viewport={{ once: true }}
      >
        <input
          className="rounded-md border border-primary bg-accent p-2 text-negative outline-none placeholder-shown:text-primary focus:border-negative"
          type="text"
          placeholder="Name"
        />
        <input
          className="rounded-md border border-primary bg-accent p-2 text-negative outline-none placeholder-shown:text-primary focus:border-negative"
          type="text"
          placeholder="Email address"
        />
        <input
          className="rounded-md border border-primary bg-accent p-2 text-negative outline-none placeholder-shown:text-primary focus:border-negative"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="h-40 resize-none rounded-md border border-primary bg-accent p-2 text-negative outline-none placeholder-shown:text-primary focus:border-negative"
          placeholder="Message"
        />
        <button className="w-fit self-end rounded-md border border-primary px-6 py-2 text-lg hover:border-negative hover:text-negative">
          Submit
        </button>
      </motion.form>
    </section>
  );
};
