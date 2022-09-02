import { Stylesheet, InjectionMode } from '@uifabric/merge-styles';
import { resetIds } from '@uifabric/utilities';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

// Do this in file scope to initialize the stylesheet before Fluent UI React components are imported.
const stylesheet = Stylesheet.getInstance();

// Set the config.
stylesheet.setConfig({
    injectionMode: InjectionMode.none,
    namespace: 'server'
});

// Now set up the document, and just reset the stylesheet.
export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        stylesheet.reset();
        resetIds();

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: [initialProps.styles, <style key="fluentui-css" dangerouslySetInnerHTML={{ __html: stylesheet.getRules(true) }} />],
        }
    }

    render() {
        return (
            <Html prefix="og: http://ogp.me/ns#">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
};