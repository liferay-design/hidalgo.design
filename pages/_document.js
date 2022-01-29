import { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/Almoneda/Almoneda-Bold.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Almoneda/Almoneda-Light.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Almoneda/Almoneda-Regular.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Almoneda/Almoneda-Bold.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Almoneda/Almoneda-Light.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Almoneda/Almoneda-Regular.woff"
          as="font"
          crossOrigin="anonymous"
        />
        {/* thanks to https://kirazhang.com/posts/nextjs-custom-fonts for the how-to on this! */}
      </Head>
      <body>
        <InitializeColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
