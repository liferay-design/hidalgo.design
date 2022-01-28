import * as React from 'react'

import Meta from '../components/meta'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import Navbar from '../components/navbar'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
