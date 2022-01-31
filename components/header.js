/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Container, Flex, Button } from 'theme-ui'
import ColorSwitcher from './color-switcher'
import Logo from './logo'

const Navbar = props => {
  return (
    <Container sx={{ py: 3 }}>
      <Flex as="nav">
        <Logo sx={{ color: 'text' }} />
        <div sx={{ mx: 'auto' }} />
        <Button href="#contact">Contact</Button>
        <ColorSwitcher />
      </Flex>
    </Container>
  )
}

export default Navbar
