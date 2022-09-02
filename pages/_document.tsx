import { Stylesheet, InjectionMode } from '@uifabric/merge-styles';
import { resetIds } from '@uifabric/utilities';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { isNavigatorLanguageItalian } from '../services/Utils';

// Do this in file scope to initialize the stylesheet before Fluent UI React components are imported.
const stylesheet = Stylesheet.getInstance();

// Set the config.
stylesheet.setConfig({
    injectionMode: InjectionMode.none,
    namespace: 'server'
});

// Now set up the document, and just reset the stylesheet.
export default class MyDocument extends Document<{ language: string }> {
    static async getInitialProps(ctx: DocumentContext) {
        stylesheet.reset();
        resetIds();

        const initialProps = await Document.getInitialProps(ctx);
        const language = ctx.req?.headers['accept-language'];

        return {
            ...initialProps,
            language: language,
            styles: [ initialProps.styles, <style key="fluentui-css" dangerouslySetInnerHTML={{ __html: stylesheet.getRules(true) }} /> ]
        }
    }

    render() {
        const language = isNavigatorLanguageItalian(this.props.language) ? "it" : "en";

        return (
            <Html prefix="og: http://ogp.me/ns#" lang={language}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
};