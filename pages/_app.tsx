import { AppProps } from "next/app"
import { ChakraProvider, ColorModeScript, SkipNavLink, Stack } from "@chakra-ui/react"
import { QueryClientProvider } from "@tanstack/react-query"
import { DefaultSeo } from "next-seo"
import { queryClient } from "../lib/queryClient"
import { theme } from "@/styles"
import { appWithTranslation } from "next-i18next"
import { GeistSans } from "geist/font/sans"
import SEO from "../lib/seo.config"
import Header from "@/components/header"
import PrivacyPopup from "@/components/privacy/popup"
import Footer from "@/components/footer"
import SearchHintSnackbar from "@/components/search-hint"
import "../lib/i18n"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Stack as="main" className={GeistSans.className} spacing={0} h="full">
          <SkipNavLink zIndex={9999}>Skip to content</SkipNavLink>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <DefaultSeo {...SEO} />
          <Header />
          <Component {...pageProps} />
          <Footer />
          <PrivacyPopup />
          <SearchHintSnackbar />
        </Stack>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
