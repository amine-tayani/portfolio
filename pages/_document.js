import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
          <meta
            name="description"
            content="Amine Tayani is  a full stack developer, passionate about web development especially Javascript (React, NodeJS, MERN stack development...), I have built many projects using laravel, Django, and a lot of responsive and fully functional websites."
          />

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
          <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-Bold.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
