export const Landing = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <header className="flex flex-col items-center gap-y-8">
        <h1 className="text-negative text-6xl font-bold">Terrence Zhang</h1>
        <h2 className="text-2xl">Web Developer</h2>
        <div className="flex gap-x-6">
          <a>Resume</a>
          <a>Github</a>
          <a>LinkedIn</a>
        </div>
      </header>
    </section>
  );
};
