import Hero from "../components/Hero";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
