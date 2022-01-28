import { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/Almoneda/AlmonedaVariableVF.woff2"
          as="font"
          crossOrigin=""
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
