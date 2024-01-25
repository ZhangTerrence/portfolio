"use client";

import { type FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export const Contact = () => {
  const contactForm = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<"success" | "neutral" | "error">(
    "neutral",
  );

  const renderBorderColor = () => {
    if (formState === "success") {
      return "border-green-400";
    } else if (formState === "error") {
      return "border-red-400";
    } else {
      return "";
    }
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (
      !process.env.EMAIL_SERVICE_ID ||
      !process.env.EMAIL_TEMPLATE_ID ||
      !process.env.EMAIL_PUBLIC_KEY
    ) {
      setFormState("error");
      setTimeout(() => {
        setFormState("neutral");
      }, 1000);
      return;
    }

    if (!contactForm.current) {
      setFormState("error");
      setTimeout(() => {
        setFormState("neutral");
      }, 1000);
      return;
    }

    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE_ID,
        process.env.EMAIL_TEMPLATE_ID,
        contactForm.current,
        process.env.EMAIL_PUBLIC_KEY,
      )
      .then(
        () => {
          setFormState("success");
          contactForm.current?.reset();
          setTimeout(() => {
            setFormState("neutral");
          }, 1000);
        },
        () => {
          setFormState("error");
          setTimeout(() => {
            setFormState("neutral");
          }, 1000);
        },
      );
  };

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
        onSubmit={(e) => sendEmail(e)}
        ref={contactForm}
      >
        <input
          className={`${renderBorderColor()} rounded-md border border-primary bg-accent p-2 text-negative outline-none transition-colors duration-300 placeholder-shown:text-primary focus:border-negative`}
          name="from_name"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className={`${renderBorderColor()} rounded-md border border-primary bg-accent p-2 text-negative outline-none transition-colors duration-300 placeholder-shown:text-primary focus:border-negative`}
          name="from_email"
          type="email"
          placeholder="Email address"
          required
        />
        <textarea
          className={`${renderBorderColor()} h-60 resize-none rounded-md border border-primary bg-accent p-2 text-negative outline-none transition-colors duration-300 placeholder-shown:text-primary focus:border-negative`}
          name="message"
          placeholder="Message"
          required
        />
        <button
          className="w-fit self-end rounded-md border border-primary px-6 py-2 text-lg hover:border-negative hover:text-negative"
          type="submit"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
};
