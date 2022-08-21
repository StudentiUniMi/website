import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Next.js + Fluent UI Example</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}