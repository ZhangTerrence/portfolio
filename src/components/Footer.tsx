import { SiGithub, SiLinkedin } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="flex h-40 w-screen flex-col items-center justify-center gap-y-4 border-t">
      <div className="flex gap-x-6 text-4xl">
        <a href="https://github.com/ZhangTerrence" target="_blank">
          <SiGithub />
        </a>
        <a href="https://linkedin.com/in/ZhangTerrence/" target="_blank">
          <SiLinkedin />
        </a>
      </div>
      <p>&copy; 2024 Terrence Zhang</p>
    </footer>
  );
};
