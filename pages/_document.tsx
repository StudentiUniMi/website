import { Stylesheet, InjectionMode, resetIds } from '@fluentui/react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { isNavigatorLanguageItalian, parseCookies } from '../services/Utils';

const stylesheet = Stylesheet.getInstance();

stylesheet.setConfig({
    injectionMode: InjectionMode.none,
    namespace: 'server'
});

export default class MyDocument extends Document<{ cookieLanguage: string, requestLanguage: string }> {
    static async getInitialProps(ctx: DocumentContext) {
        stylesheet.reset();
        resetIds();

        const initialProps = await Document.getInitialProps(ctx);
        const cookieLanguage = parseCookies(ctx.req?.headers.cookie!).language;
        const requestLanguage = isNavigatorLanguageItalian(ctx.req?.headers['accept-language']!) ? "it" : "en";

        return {
            ...initialProps,
            cookieLanguage: cookieLanguage,
            requestLanguage: requestLanguage,
            styles: [ initialProps.styles, <style key="fluentui-css" dangerouslySetInnerHTML={{ __html: stylesheet.getRules(true) }} /> ]
        }
    };

    render() {
        let language = this.props.cookieLanguage ?? this.props.requestLanguage;

        return (
            <Html prefix="og: http://ogp.me/ns#" lang={language}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    };
};