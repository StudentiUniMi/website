import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  styles: {
    global: {
      "html, body, #__next": {
        minHeight: "100dvh",
        w: "full",
      },
      "body, #__next": {
        display: "flex",
      },
      main: {
        flexGrow: "1",
      },
    },
  },
  fonts: {
    heading: "var(--font-geist-sans), sans-serif",
    body: "var(--font-geist-sans), sans-serif",
    mono: "var(--font-geist-mono), monospace",
  },
  textStyles: {},
  components: {
    Container: {
      baseStyle: {
        maxW: "1440px",
        w: "full",
        h: "full",
        mx: "auto",
      },
    },
    Heading: {
      sizes: {
        xl: {
          letterSpacing: "-0.02em",
        },
        "4xl": {
          letterSpacing: "-0.02em",
        },
      },
    },
  },
})
