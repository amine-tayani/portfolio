import Hero from "../components/Hero"
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/projects/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Amine Tayani Portfolio - Full Stack Developer</title>
      </head>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
