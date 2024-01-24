"use client";

export const Contact = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center gap-y-4 px-4 py-16">
      <h1 className="text-4xl font-bold text-negative">Contact</h1>
      <form className="flex w-[35%] flex-col gap-y-4">
        <input
          className="rounded-md border bg-accent p-2 outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="rounded-md border bg-accent p-2 outline-none"
          type="text"
          placeholder="Email address"
        />
        <input
          className="rounded-md border bg-accent p-2 outline-none"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="h-40 rounded-md border bg-accent p-2 outline-none"
          placeholder="Message"
        />
        <button className="w-fit self-end rounded-md border px-6 py-2 text-lg">
          Submit
        </button>
      </form>
    </section>
  );
};
