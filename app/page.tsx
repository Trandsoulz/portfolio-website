import dynamic from "next/dynamic";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about"

// Lazy-load below-the-fold sections to reduce initial JS bundle
const TechStack = dynamic(() => import("./components/tech-stack"));
const Projects = dynamic(() => import("./components/projects"));
const Architecture = dynamic(() => import("./components/architecture"));
const Experience = dynamic(() => import("./components/experience"));
const Contact = dynamic(() => import("./components/contact"));
const Footer = dynamic(() => import("./components/footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Architecture />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
