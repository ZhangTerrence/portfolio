import { Navbar } from "@/components/Navbar";
import { Landing } from "../components/Landing";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeToggler } from "@/components/ThemeToggler";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ThemeToggler />
    </main>
  );
}
