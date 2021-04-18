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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta
          name="description"
          content="Amine Tayani is  a full stack developer, passionate about web development especially Javascript (React, NodeJS, MERN stack development...), I have built many projects using laravel, Django, and a lot of responsive and fully functional websites."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Amine Tayani Portfolio - Full Stack Developer</title>
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
