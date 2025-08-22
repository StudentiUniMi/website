import { Html, Head, Main, NextScript, DocumentContext } from "next/document"
import i18nextConfig from "../next-i18next.config"
import Script from "next/script"

function MyDocument({ locale }: { locale: string }) {
  return (
    <Html lang={locale}>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="Network StudentiUniMi" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://studentiunimi.it https://code.jquery.com https://cdn.jsdelivr.net https://p.studentiunimi.it; font-src * data:;"
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Self-hosted Plausible Web Analytics */}
        <Script defer data-domain="studentiunimi.it" src="https://p.studentiunimi.it/js/script.js" />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx)
  const { locale } = ctx
  return { ...initialProps, locale: locale ?? i18nextConfig.i18n.defaultLocale }
}

export default MyDocument
