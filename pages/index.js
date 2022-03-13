import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/Contact";
import Credit from "../components/Credit";
import Experiences from "../components/Tabs/Experiences";

const Home = () => {
  return (
    <>
      <head>
        <title>Amine Tayani</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <Credit />
    </>
  );
};

export default Home;
