/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Container, Flex, Button } from 'theme-ui'
import ColorSwitcher from './color-switcher'
import Logo from './logo'

const Navbar = props => {
  return (
    <Container sx={{ py: 3, my: 2, }}>
      <Flex as="nav" sx={{alignItems: 'center'}}>
        <Logo sx={{ color: 'text' }} />
        <div sx={{ mx: 'auto' }} />
        <Button variant="outline" sx={{mx: 4}} as="a" href="#contact">Contact</Button>
        <ColorSwitcher />
      </Flex>
    </Container>
  )
}

export default Navbar
