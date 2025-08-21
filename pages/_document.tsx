import { Html, Head, Main, NextScript, DocumentContext } from "next/document"
import i18nextConfig from "../next-i18next.config"

function MyDocument({ locale }: { locale: string }) {
  return (
    <Html lang={locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
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
