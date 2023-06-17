import Contact from "@/components/Contact";
import Credit from "@/components/Credit";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experiences from "@/components/Tabs/Experiences";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
      <Credit />
    </>
  );
}
