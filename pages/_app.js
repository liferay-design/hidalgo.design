import * as React from 'react'

import Meta from '../components/meta'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../lib/global.css'
import { ParallaxProvider } from 'react-scroll-parallax'

const App = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <Meta />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ParallaxProvider>
  )
}

export default App
