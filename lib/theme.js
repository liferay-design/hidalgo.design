export const colors = {
  pink: '#e94256',
  red: '#DA4242',
  yellow: '#ffb300',
  green: '#0b9e43',
  blue: '#0e90db',
  purple: '#6045ec',

  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',

  black: '#110000',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',

  color_000: '#160101',
  color_100: '#3D2C2C',
  color_200: '#412C2C',
  color_300: '#464040',
  color_400: '#695656',
  color_500: '#A59696',
  color_600: '#CCC6C6',
  color_700: '#D6CFCF',
  color_800: '#F5F2F2',
  color_900: '#F6F4F4',

  // twitter: '#1da1f2',
  // facebook: '#3b5998',
  // instagram: '#e1306c',
}

const bodyFonts = `'Quattrocento Sans', Tahoma, Verdana, sans-serif`

const headingFonts = `Baskerville, "Baskerville Old Face", "Hoefler Text", Garamond, "Times New Roman", serif`

const theme = {
  breakpoints: [32, 48, 64, 96, 128].map(w => `${w}em`),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [16, 20, 24, 32, 48, 64, 96, 128, 160, 192],
  config: {
    initialColorModeName: 'light',
    useColorSchemeMediaQuery: true,
  },
  colors: {
    ...colors,
    primary: colors.red,
    accent: colors.yellow,
    inverted: colors.white,

    text: colors.black,
    background: colors.color_900,
    lightest: colors.color_700,
    light: colors.color_500,
    secondary: colors.color_300,
    dark: colors.color_200,
    darkest: colors.color_000,

    modes: {
      dark: {
        inverted: '#0D0000',
        text: colors.white,
        background: colors.black,
        lightest: colors.color_100,
        light: colors.color_400,
        secondary: colors.color_600,
        dark: colors.color_700,
        darkest: colors.color_900,
      },
    },
  },
  fonts: {
    display: `Almoneda, ${headingFonts}`,
    heading: `${headingFonts}`,
    body: `${bodyFonts}`,
    monospace: 'ui-monospace, "Roboto Mono", Menlo, Consolas, monospace',
  },
  lineHeights: {
    limit: 0.875,
    display: 0.925,
    title: 1,
    heading: 1.125,
    subheading: 1.25,
    caption: 1.375,
    body: 1.5,
  },
  fontWeights: {
    display: 300,
    body: 400,
    bold: 700,
    heading: 700,
  },
  letterSpacings: {
    title: '-0.009em',
    headline: '0.009em',
  },
  sizes: {
    widePlus: 2048,
    wide: 1536,
    layoutPlus: 1440,
    layout: 1024,
    copyUltra: 980,
    copyPlus: 768,
    copy: 680,
    narrowPlus: 600,
    narrow: 512,
  },
  radii: {
    small: 4,
    default: 0,
    extra: 16,
    ultra: 32,
    circle: '50%',
  },
  shadows: {
    text: '0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125)',
    small: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)',
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    elevated:
      '0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)',
  },
  text: {
    paragraph: {
      my: 2,
      large: {
        fontSize: 2,
        my: 3,
        color: 'color_400',
      },
    },
    default: {
      fontSize: [1, 2],
      // color: 'red',
    },
    display: {
      fontFamily: 'display',
      fontWeight: 'display',
    },
    smallHeading: {
      variant: 'text.display',
      fontWeight: 700,
      fontSize: 4,
    },
    smallHeadingLight: {
      variant: 'text.smallHeading',
      color: 'light',
    },
    smallHeadingSecondary: {
      variant: 'text.smallHeading',
      color: 'secondary',
    },
    smallHeadingLink: {
      variant: 'text.smallHeadingSecondary',
      mb: 4,
      lineHeight: 1,
      '> span': {
        color: 'light',
      },
      '&:hover': {
        '> span': {
          color: 'primary',
        },
      },
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'headline',
      mt: 0,
      mb: 0,
    },
    ultratitle: {
      fontSize: [5, 6, 7],
      lineHeight: 'title',
      fontWeight: 'heading',
      letterSpacing: 'title',
    },
    title: {
      variant: 'text.display',
      fontSize: [5, 7],
      letterSpacing: 'title',
      lineHeight: 'display',
      color: 'dark',
    },
    subtitle: {
      mt: 1,
      mb: 4,
      color: 'secondary',
      fontSize: [2, 3],
      fontFamily: 'body',
      fontWeight: 'body',
      letterSpacing: 'headline',
      lineHeight: 'subheading',
    },
    headline: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'headline',
      lineHeight: 'heading',
      fontSize: 4,
      mt: 3,
      mb: 3,
    },
    subheadline: {
      fontFamily: 'heading',
      lineHeight: 'subheading',
      fontSize: 3,
      mt: 0,
      mb: 3,
    },
    eyebrow: {
      color: 'muted',
      fontSize: [3, 4],
      fontWeight: 'bold',
      letterSpacing: 'headline',
      lineHeight: 'subheading',
      textTransform: 'uppercase',
      mt: 0,
      mb: 2,
    },
    lead: {
      fontSize: [2, 3],
      my: [2, 3],
    },
    caption: {
      color: 'muted',
      fontSize: 1,
      letterSpacing: 'headline',
      lineHeight: 'caption',
    },
  },
  alerts: {
    primary: {
      borderRadius: 'default',
      bg: 'yellow',
      color: 'background',
      fontWeight: 'body',
      lineHeight: 'heading',
    },
  },
  badges: {
    pill: {
      borderRadius: 'circle',
      px: 3,
      py: 1,
    },
    outline: {
      borderRadius: 'circle',
      px: 3,
      py: 1,
      bg: 'transparent',
      borderStyle: 'solid',
      borderWidth: [3, 5],
      borderColor: 'currentColor',
    },
  },
  buttons: {
    primary: {
      borderRadius: 'default',
      py: 2,
      px: 3,
      textDecoration: 'none',
      display: 'inline-block',
      color: 'white',
      cursor: 'pointer',
      fontFamily: 'body',
      fontWeight: 'bold',
      textShadow: 'none',
      boxShadow: 'card',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':focus,:hover': {
        boxShadow: 'elevated',
        transform: 'scale(1.0625)',
      },
      svg: { ml: -1, mr: 2, verticalAlign: 'middle' },
    },
    lg: {
      variant: 'buttons.primary',
      fontSize: 3,
      lineHeight: 'title',
      px: 4,
      py: 3,
    },
    outline: {
      variant: 'buttons.primary',
      bg: 'transparent',
      color: 'text',
      // border: '3px solid currentColor',
    },
    outlineLg: {
      variant: 'buttons.primary',
      bg: 'transparent',
      color: 'primary',
      border: '2px solid currentColor',
      lineHeight: 'title',
      fontSize: 3,
      px: 4,
      py: 3,
    },
  },
  cards: {
    heroPhoto: {
      gridArea: 'hero-image',
      '> div': {
        // content: '""',
        backgroundColor: 'primary',
        height: '80%',
        width: '96%',
        position: 'absolute',
        bottom: -100,
        right: -100,
        zIndex: '-1',
      },
    },
    invisible: {
      visibility: 'hidden',
      position: 'relative',
      top: '-50vh',
    },
    primary: {
      bg: 'elevated',
      color: 'text',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card',
      overflow: 'hidden',
    },
    sunken: {
      bg: 'sunken',
      p: [3, 4],
      borderRadius: 'extra',
      'th, td': { borderColor: 'muted' },
    },
    interactive: {
      variant: 'cards.primary',
      textDecoration: 'none',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':hover,:focus': {
        transform: 'scale(1.0625)',
        boxShadow: 'elevated',
      },
    },
  },
  forms: {
    input: {
      color: 'text',
      fontFamily: 'inherit',
      borderRadius: 'base',
      border: 0,
      '::-webkit-input-placeholder': { color: 'placeholder' },
      '::-moz-placeholder': { color: 'placeholder' },
      ':-ms-input-placeholder': { color: 'placeholder' },
      '&[type="search"]::-webkit-search-decoration': { display: 'none' },
    },
    textarea: { variant: 'forms.input' },
    select: { variant: 'forms.input' },
    label: {
      color: 'text',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      lineHeight: 'caption',
      fontSize: 2,
    },
  },
  layout: {
    container: {
      maxWidth: ['layout', null, 'layoutPlus'],
      width: '100%',
      mx: 'auto',
      px: 3,
    },
    wide: {
      variant: 'layout.container',
      maxWidth: ['layout', null, 'wide'],
    },
    copy: {
      variant: 'layout.container',
      maxWidth: ['copy', null, 'copyPlus'],
    },
    narrow: {
      variant: 'layout.container',
      maxWidth: ['narrow', null, 'narrowPlus'],
    },
    grids: {
      base: {
        gridTemplateColumns: ['1fr', '1fr 1fr'],
        gridTemplateRows: 'auto',
        gap: '160px 160px',
      },
      homepage: {
        my: 6,
        gridTemplateAreas: [
          '"hero-content" "hero-image" "about-main" "about-sub" "messages"',
          '"hero-content hero-image" "about-main about-sub" "messages bubbles"',
        ],
        variant: 'layout.grids.base',
      },
      footer: {
        gridTemplateAreas: [
          '"contact" "credits" "copyright"',
          '"copyright copyright" "credits contact"',
        ],
        variant: 'layout.grids.base',
      },
    },
  },
  images: {
    headshot: {
      mt: 4,
      mb: -72,
      ml: -1,
      position: 'relative',
      width: 80,
      height: 80,
      borderRadius: 'circle',
      overflow: 'hidden',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
      margin: 0,
      overflowX: 'hidden',
      minHeight: '100vh',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.eyebrow',
      fontSize: 3,
      mb: 0,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontWeight: 'body',
      lineHeight: 'body',
      my: 3,
    },
    img: {
      maxWidth: '100%',
    },
    hr: {
      border: '2px solid',
      borderColor: 'accent',
      borderRadius: 2,
      maxWidth: 256,
      mx: 'auto',
      my: 4,
    },
    a: {
      color: 'primary',
      textDecoration: 'inherit',
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'sunken',
      overflow: 'auto',
      borderRadius: 'default',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
      color: 'accent',
      bg: 'sunken',
      borderRadius: 'small',
      mx: 1,
      px: 1,
    },
    li: {
      my: 2,
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'border',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '1px',
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '0.5px',
    },
    blockquote: {
      alignSelf: 'start',
      backgroundColor: 'inverted',
      px: 4,
      py: 4,
      mx: -4,
      fontSize: 2,
      maxWidth: '48ch',
      '> p': {
        // fontSize: 2,
      },
      '> cite': {
        fontFamily: 'display',
        fontWeight: '100',
        fontSize: 5,
        lineHeight: 1,
        color: 'light',
        fontStyle: 'initial',
        '> span': {
          fontWeight: 'bold',
        },
        '&:after': {
          content: '"\\00a0💙"',
        },
        '> div:nth-of-type(1)': {
          mb: -56,
        },
      },
      ':nth-of-type(3n), :nth-of-type(1)': {
        mt: 6,
      },
      ':nth-of-type(4n), :nth-of-type(14)': {
        mt: 8,
      },
      ':nth-of-type(5n)': {
        mt: 7,
      },
    },
  },
  util: {
    motion: '@media (prefers-reduced-motion: no-preference)',
    reduceMotion: '@media (prefers-reduced-motion: reduce)',
    reduceTransparency: '@media (prefers-reduced-transparency: reduce)',
    supportsClipText: '@supports (-webkit-background-clip: text)',
    supportsBackdrop:
      '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)',
  },
}

theme.util.cx = c => theme.colors[c] || c
theme.util.gx = (from, to) => `radial-gradient(
  ellipse farthest-corner at top left,
  ${theme.util.cx(from)},
  ${theme.util.cx(to)}
)`
theme.util.gxText = (from, to) => ({
  color: theme.util.cx(to),
  [theme.util.supportsClipText]: {
    backgroundImage: theme.util.gx(from, to),
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
})

theme.cards.translucent = {
  // variant: 'cards.primary',
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  color: 'text',
  boxShadow: 'none',
  [theme.util.supportsBackdrop]: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'saturate(180%) blur(20px)',
    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
  },
  [theme.util.reduceTransparency]: {
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none',
  },
}
theme.cards.translucentDark = {
  // variant: 'cards.primary',
  backgroundColor: 'rgba(0, 0, 0, 0.875)',
  color: 'white',
  boxShadow: 'none',
  [theme.util.supportsBackdrop]: {
    backgroundColor: 'rgba(0, 0, 0, 0.625)',
    backdropFilter: 'saturate(180%) blur(16px)',
    WebkitBackdropFilter: 'saturate(180%) blur(16px)',
  },
  [theme.util.reduceTransparency]: {
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none',
  },
}

export default theme
