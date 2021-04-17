import Head from "next/head"
import Hero from "../components/Hero"
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/projects/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Head>
        <title>Amine Tayani | Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/quicksand/Quicksand-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="preload" href="/fonts/quicksand/Quicksand-Bold.ttf" as="font" crossOrigin="" />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="preload" href="/fonts/Montserrat/Montserrat-Bold.ttf" as="font" crossOrigin="" />
      </Head>
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
