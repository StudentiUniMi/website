import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  breakpoints: {
    xs: "22.5rem", // 360px
    sm: "30rem", // 480px
    md: "48rem", // 768px
    lg: "62rem", // 992px
    xl: "80rem", // 1280px
    "2xl": "96rem", // 1536px
  },
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
      "*:focus-visible": {
        outline: "none",
        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)", // stesso effetto che hai sugli input
        borderRadius: "md",
        transition: "box-shadow 0.2s ease",
        outlineOffset: "6px",
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
