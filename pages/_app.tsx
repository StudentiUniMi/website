import { AppProps } from "next/app"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <main className={GeistSans.className}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <DefaultSeo {...SEO} />
          <Header />
          <Component {...pageProps} />
          <Footer />
          <PrivacyPopup />
        </main>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
