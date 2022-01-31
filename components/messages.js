/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Flex, Heading, Paragraph, Box, Button } from 'theme-ui'
import Image from 'next/image'

const Messages = ({ gridArea }) => {
  return (
    <Flex
      as="section"
      sx={{
        ...gridArea,
        backgroundColor: 'white',
        ml: -5,
        // mr: -3,
        pl: 5,
        pr: 1,
        pt: 5,
        pb: 6,
        width: '160%',
      }}
    >
      <Box>
        <Heading variant="smallHeadingSecondary" sx={{ fontSize: 5, mb: 4 }}>
          Sir, you’ve got some messages
        </Heading>
        <Paragraph variant="paragraph.large">
          This site was a parting gift from the team at Liferay.Design.
        </Paragraph>
        <Paragraph variant="paragraph.large">
          We wrote you some farewell messages.
        </Paragraph>
        <Button as="a" href="/aufweidersein">
          Read Messages
        </Button>
      </Box>
      <Box as="span" sx={{ margin: 'auto' }} />
      <Box sx={{ mt: -5, height: 200, width: 220, position: 'relative' }}>
        <Image
          src="/images/stamp.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </Box>
    </Flex>
  )
}

export default Messages
