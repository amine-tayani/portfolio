import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="Amine Tayani is  a full stack developer, passionate about web development especially Javascript (React, NodeJS, MERN stack development...), I have built many projects using laravel, Django, and a lot of responsive and fully functional websites."
          />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

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
