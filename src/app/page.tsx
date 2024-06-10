import About from "@/sections/about/About";
import Experience from "@/sections/experience/Experience";
import Footer from "@/sections/footer/Footer";
import Hero from "@/sections/hero/Hero";
import Projects from "@/sections/projects/Projects";
import Skills from "@/sections/skills/Skills";

export default function page() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </>
  );
}
