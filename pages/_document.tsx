import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"
import Script from "next/script"

class MyDocument extends Document<{ locale?: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const locale = ctx.locale || "it"
    return { ...initialProps, locale }
  }

  render() {
    const locale = this.props.locale || "it"

    return (
      <Html lang={locale}>
        <Head>
          <link rel="icon" href="/images/logo.png" />
          <meta name="author" content="Network StudentiUniMi" />
          <meta
            httpEquiv="Content-Security-Policy"
            content="style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://studentiunimi.it https://code.jquery.com https://cdn.jsdelivr.net https://p.studentiunimi.it; font-src * data:;"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script defer data-domain="studentiunimi.it" src="https://p.studentiunimi.it/js/script.js" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
