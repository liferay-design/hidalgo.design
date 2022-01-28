/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Container, Flex } from 'theme-ui'
import ColorSwitcher from './color-switcher'
import Twitter from './twitter'
import Logo from './logo'

const Navbar = props => {
  return (
    <Container sx={{ py: 3 }}>
      <Flex as="nav">
        <Logo sx={{ color: 'text' }} />
        <div sx={{ mx: 'auto' }} />
        <Twitter sx={{ color: 'text' }} />
        <ColorSwitcher />
      </Flex>
    </Container>
  )
}

export default Navbar
