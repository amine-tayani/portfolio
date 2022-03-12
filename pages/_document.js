import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="title" content="Amine Tayani - full stack developer" />
          <meta
            name="google-site-verification"
            content="gbBxKgDgP_MslIfUGtY3r43OT5fn_AwbQ2Lw0847o9U"
          />
          <meta
            name="keywords"
            content="Amine Tayani , amine , tayani , full stack developer , morocco"
          />
          <meta
            name="description"
            content="Amine Tayani is  a full stack developer, passionate about web development especially Javascript (React, NodeJS, MERN stack ...)."
          />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="author" content="Amine Tayani" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aminetayani.me/" />
          <meta
            property="og:title"
            content="Amine Tayani - full stack developer"
          />
          <meta
            property="og:description"
            content="Amine Tayani is  a full stack developer, passionate about web development especially Javascript (React, NodeJS, MERN stack ...)."
          />
          <meta
            property="og:image"
            content="https://aminetayani.me/assets/screen.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://aminetayani.me/" />
          <meta
            property="twitter:title"
            content="Amine Tayani - full stack developer"
          />
          <meta
            property="twitter:description"
            content="Amine Tayani is  a full stack developer, passionate about web development especially Javascript (React, NodeJS, MERN stack ...)."
          />
          <meta
            property="twitter:image"
            content="https://aminetayani.me/assets/screen.png"
          />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon-16x16.png"
          />
          <link rel="manifest" href="/assets/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/assets/safari-pinned-tab.svg"
            color="#5bbad5"
          />

          <link
            rel="preload"
            href="/fonts/Inter/Inter-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter/Inter-Medium.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter/Inter-SemiBold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter/Inter-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Inter/Inter-Black.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono/JetBrainsMono-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono/JetBrainsMono-Medium.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono/JetBrainsMono-Bold.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body
          className={
            process.env.NODE_ENV == "devlopement" ? "debug-screens" : ""
          }
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
