export const Landing = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <header className="flex flex-col items-center gap-y-8">
        <h1 className="text-6xl font-bold text-negative">Terrence Zhang</h1>
        <h2 className="text-2xl">Web Developer</h2>
        <div className="flex gap-x-6">
          <a href="/static/resume.pdf" download="TerrenceZhang_Resume.pdf">
            Resume
          </a>
          <a href="https://github.com/ZhangTerrence" target="_blank">
            Github
          </a>
          <a href="https://linkedin.com/in/ZhangTerrence/" target="_blank">
            LinkedIn
          </a>
        </div>
      </header>
    </section>
  );
};
