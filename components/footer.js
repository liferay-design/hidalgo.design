/** @jsxRuntime classic */
/** @jsx jsx */

import { Parallax } from 'react-scroll-parallax'
import {
  jsx,
  Container,
  Text,
  Grid,
  Box,
  Heading,
  Link,
  Flex,
  Paragraph,
} from 'theme-ui'
import Image from 'next/image'

const Footer = props => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Parallax speed={10} translateY={[-2000, -100]}>
        <Box
          sx={{
            right: ['-27%', 0],
            bottom: ['65%', '20%'],
            position: 'absolute',
            height: ['50vw', 600],
            width: ['100%', 400],
          }}
        >
          <Image
            src="/images/juan-up-transparent.png"
            alt="Picture of Juan and some of the Designers"
            layout="fill"
            objectFit="contain"
            objectPosition="center bottom"
          />
        </Box>
      </Parallax>
      <Container sx={{ mb: 8 }}>
        <Grid
          as="footer"
          sx={{ variant: 'layout.grids.footer', gridArea: 'footer' }}
        >
          <Box
            sx={{
              gridArea: 'copyright',
            }}
          >
            <Heading
              sx={{
                variant: 'text.title',
                fontWeight: 700,
                color: 'light',
                lineHeight: '1.05',
                fontSize: ['32vw', 7],
                mb: 6,
              }}
            >
              Copy&#8203;right © 2022 <br /> Juan &#8203;Hidalgo
            </Heading>
          </Box>

          <Box sx={{ gridArea: 'credits' }}>
            <Heading as="h2" variant="smallHeadingLight">
              Credits
            </Heading>

            <Flex sx={{ gap: [4, 40], mt: 1 }}>
              <Box>
                <Paragraph>
                  Headlines are set in{' '}
                  <Link href="https://www.sudtipos.com/font/almoneda">
                    Almoneda
                  </Link>
                  , a typeface designed by Ales Santos in&nbsp;Madrid.
                </Paragraph>
                <Paragraph>
                  Body copy is set in{' '}
                  <Link href="https://fonts.google.com/specimen/Quattrocento+Sans">
                    Quattrocento Sans
                  </Link>
                  , a typeface designed by Pablo Impallari.
                </Paragraph>
              </Box>

              <Box>
                <Paragraph>
                  The site is powered by{' '}
                  <Link href="https://nextjs.org/">Next.js</Link>, styled using{' '}
                  <Link href="https://theme-ui.com">Theme UI</Link>, and hosted
                  on <Link href="https://vercel.app/">Vercel</Link>.
                </Paragraph>
                <Paragraph>
                  Domain registered with{' '}
                  <Link href="https://porkbun.com/">porkbun.com</Link>.
                </Paragraph>
              </Box>
            </Flex>
          </Box>

          <Box id="contact" sx={{ gridArea: 'contact' }}>
            <Heading as="h2" variant="smallHeadingLight" sx={{ mb: 3 }}>
              Contact
            </Heading>

            <Link
              href="mailto:juan@hidalgo.design"
              sx={{ display: 'block', variant: 'text.smallHeadingLink' }}
            >
              Email <Box as="span">juan@hidalgo.design</Box>
            </Link>

            <Link
              href="https://linkedin.com/in/juanhidalgoreina"
              sx={{ display: 'block', variant: 'text.smallHeadingLink' }}
            >
              LinkedIn <Box as="span">/juanhidalgoreina</Box>
            </Link>

            <Link
              href="https://twitter.com/jhidalgoreina"
              sx={{ display: 'block', variant: 'text.smallHeadingLink' }}
            >
              Twitter{' '}
              <Box as="span" sx={{ display: ['block', 'inline'] }}>
                jhidalgoreina
              </Box>
            </Link>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
