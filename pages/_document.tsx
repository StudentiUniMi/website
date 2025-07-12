import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { Stylesheet, resetIds } from '@fluentui/react';

const stylesheet = Stylesheet.getInstance();

class MyDocument extends Document<{ styleTags: string; serializedStylesheet: string }> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & {
    styleTags: string;
    serializedStylesheet: string;
  }> {
    resetIds();
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styleTags: stylesheet.getRules(true),
      serializedStylesheet: stylesheet.serialize(),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: this.props.styleTags }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.FabricConfig = { serializedStylesheet: ${JSON.stringify(
                this.props.serializedStylesheet
              )} };`,
            }}
          />
          <link rel="stylesheet" href="/styles/fabric.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
