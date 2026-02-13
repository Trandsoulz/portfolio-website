import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import TechStack from "./components/tech-stack";
import Projects from "./components/projects";
import Architecture from "./components/architecture";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Architecture />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
