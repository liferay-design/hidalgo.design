// /** @jsx jsx */ Bos

import { Flex, Image, Box, jsx, Link, Grid } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import Logo from '../components/logo'
import Twitter from '../components/twitter'

export default () => {
  return (
    <body>
      <main>
        <nav>
          <Grid>
            <Logo />
            <Twitter />
            <ColorSwitcher />
            <Box languageSwitcher />
          </Grid>
        </nav>
        <section></section>
        hello world
      </main>
    </body>
  )
}
