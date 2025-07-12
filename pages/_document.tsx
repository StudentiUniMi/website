import { Stylesheet, InjectionMode, resetIds } from '@fluentui/react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

const stylesheet = Stylesheet.getInstance();

stylesheet.setConfig({
    injectionMode: InjectionMode.none,
    namespace: 'server'
});

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        stylesheet.reset();
        resetIds();

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: [ initialProps.styles, <style key="fluentui-css" dangerouslySetInnerHTML={{ __html: stylesheet.getRules(true) }} /> ]
        }
    };

    render() {
        return (
            <Html prefix="og: http://ogp.me/ns#" lang={"it"} translate="no">
                <Head>
                  <link rel="stylesheet" href="/styles/fabric.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    };
};