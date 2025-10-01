import { AppProps } from "next/app"
import { ChakraProvider, ColorModeScript, SkipNavLink, Stack } from "@chakra-ui/react"
import { QueryClientProvider } from "@tanstack/react-query"
import { DefaultSeo } from "next-seo"
import { queryClient } from "../lib/queryClient"
import { theme } from "@/styles"
import { appWithTranslation } from "next-i18next"
import { GeistSans } from "geist/font/sans"
import { NextIntlClientProvider } from "next-intl"
import { useRouter } from "next/router"
import SEO from "../lib/seo.config"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SearchHintSnackbar from "@/components/search-hint"

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()

  return (
    <NextIntlClientProvider locale={locale} messages={pageProps.messages}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Stack as="main" className={GeistSans.className} spacing={0} h="full">
            <SkipNavLink zIndex={9999}>Skip to content</SkipNavLink>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <DefaultSeo {...SEO} />
            <Header />
            <Component {...pageProps} />
            <Footer />
            <SearchHintSnackbar />
          </Stack>
        </ChakraProvider>
      </QueryClientProvider>
    </NextIntlClientProvider>
  )
}

export default appWithTranslation(MyApp)
