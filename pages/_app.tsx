import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/University/Slider/slider.scss';
import '../styles/index.scss';
import App, { AppContext, AppProps } from 'next/app'
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { buildLightTheme, buildDarkTheme } from '../services/Themes';
import { CookiesProvider, useCookies } from 'react-cookie';
import { loadTheme } from '@fluentui/react';
import { addDays } from '../services/Utils';
import { initializeIcons } from '@fluentui/react';
import { setIconOptions } from '@fluentui/react/lib/Styling';
import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LocalizationService from "../services/LocalizationService";
import { useEffect } from "react";

initializeIcons();
setIconOptions({ disableWarnings: true }); // TODO: register icons to avoid warning

const CustomApp = ({ Component, pageProps, lang }: AppProps & {lang: string}) => {
    let [cookies, setCookie] = useCookies();
    let [theme, setTheme] = React.useState(cookies["theme"] === 'dark');
    let [palette, setPalette] = React.useState(cookies["palette"]);
    let [language, setLanguage] = React.useState(cookies["language"]);

    let [lightTheme, setLightTheme] = React.useState(buildLightTheme(palette));
    let [darkTheme, setDarkTheme] = React.useState(buildDarkTheme(palette));

    const date: Date = addDays(new Date(), 90);

    const changeTheme = () => {
        setTheme(!theme);
        if (cookies["theme"] === "dark") setCookie("theme", "light", { path: "/", expires: date });
        else { setCookie("theme", "dark", { path: "/", expires: date }); }
    };

    const changePalette = (id: string) => {
        setPalette(id);
        setLightTheme(buildLightTheme(id));
        setDarkTheme(buildDarkTheme(id));
        setCookie("palette", id, { path: "/", expires: date });
    };

    const changeLanguage = (language: string) => {
        LocalizationService.localize(language);
        setLanguage(language);
        setCookie("language", lang, { path: "/", expires: date });
    };

    /* Initialization of cookies */
    useEffect(() => {
        if (cookies["language"] === undefined) {
            const isNavLanguageITA = isNavigatorLanguageItalian(lang);
            setCookie("language", (isNavLanguageITA ? 'it' : 'en'), { path: "/", expires: date });
        }

        if (cookies["theme"] === undefined) {
            setCookie("theme", "light", { path: "/", expires: date });
        }

        if (cookies["palette"] === undefined) {
            setCookie("palette", "a", { path: "/", expires: date });
        }
    }, []);

    loadTheme(theme ? darkTheme : lightTheme);
    LocalizationService.localize(language);

    return (
        <>
            {/* Shared head properties */}
            <Head>
                <link rel="icon" href="/logo/unimi150.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="author" content="Giuseppe Del Campo, Manuele Lucchi" />
                <meta httpEquiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://studentiunimi.it https://code.jquery.com https://cdn.jsdelivr.net https://p.studentiunimi.it; font-src * data:;" />
            </Head>

            {/* Main webapp structure */}
            <CookiesProvider>
                <ThemeProvider applyTo="body" theme={theme ? darkTheme : lightTheme}>
                    <Header />
                    <Component {...pageProps} />
                    <Footer changeTheme={changeTheme} changePalette={changePalette} changeLanguage={changeLanguage} />
                </ThemeProvider>
            </CookiesProvider>

            {/* Self-hosted Plausible Web Analytics */}
            <Script defer data-domain="studentiunimi.it" src="https://p.studentiunimi.it/js/script.js" />
        </>
    )
};

CustomApp.getInitialProps = async (appContext: AppContext) => {
    const ctx = await App.getInitialProps(appContext);
    const language = appContext.ctx.req?.headers['accept-language'];

    return { ...ctx, lang: language };
};

export default CustomApp;

/**
 * This function returns true if the navigator language is italian.
 * @param {string} lang
 */
const isNavigatorLanguageItalian = (lang: string): boolean => {
    if (lang === undefined) return true;
    const langKey = lang.split(",")[0];
    console.log("Lang key: ", langKey);

    if (langKey === 'it') return true;
    return false;
};