import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { profile } from "./data/profile";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="wrap footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with Vite + React · Hosted on Vercel</span>
      </div>
    </>
  );
}

