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
import { initializeIcons } from '@fluentui/react/lib/Icons';
import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LocalizationService from "../services/LocalizationService";
import { useEffect } from "react";

initializeIcons(undefined, { disableWarnings: true });

const CustomApp = ({ Component, pageProps, lang, ssrCookies }: AppProps & { lang: string } & { ssrCookies: string }) => {
    let [cookies, setCookie] = useCookies();
    let [theme, setTheme] = React.useState(cookies["theme"] === "dark");
    let [palette, setPalette] = React.useState(cookies["palette"]);
    let [language, setLanguage] = React.useState(cookies["language"]);

    let [lightTheme, setLightTheme] = React.useState(buildLightTheme(palette));
    let [darkTheme, setDarkTheme] = React.useState(buildDarkTheme(palette));

    const date: Date = addDays(new Date(), 90);

    console.info("ssrCookies: ", ssrCookies)
    console.info("language: ", lang)
    console.info(parseCookies(ssrCookies))

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
        setCookie("language", language, { path: "/", expires: date });
    };

    /* Initialization of cookies and states */
    useEffect(() => {
        if (cookies["language"] === undefined) {
            const isNavLanguageITA = isNavigatorLanguageItalian(lang);
            setCookie("language", (isNavLanguageITA ? 'it' : 'en'), { path: "/", expires: date });
            setLanguage("it");
        }

        if (cookies["theme"] === undefined) {
            setCookie("theme", "light", { path: "/", expires: date });
            setTheme(false);
        }

        if (cookies["palette"] === undefined) {
            setCookie("palette", "a", { path: "/", expires: date });
            setLightTheme(buildLightTheme("a"));
            setDarkTheme(buildDarkTheme("a"));
            setPalette("a");
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
                    <Footer 
                        appTheme={theme}
                        language={language}
                        palette={palette}
                        changeTheme={changeTheme} 
                        changePalette={changePalette} 
                        changeLanguage={changeLanguage} 
                    />
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
    const cookies = appContext.ctx.req?.headers.cookie;

    return { ...ctx, lang: language, ssrCookies: cookies };
};

export default CustomApp;

/**
 * This function checks the header language.
 * @param {string} lang header language
 * @returns {boolean} returns true if the language is italian, false otherwise.
 */
const isNavigatorLanguageItalian = (lang: string): boolean => {
    if (lang === undefined) return true;
    const langKey = lang.split(",")[0];

    if (langKey === 'it') return true;
    return false;
};

/**
 * This function parses the header cookie string.
 * @param cookies header cookie string
 * @returns {cookiesContent} builded object
 */
const parseCookies = (cookies: string): cookiesContent => {
    let result: cookiesContent = { language: "it", theme: "light", palette: "a" };
    if (cookies === undefined) return result;
    
    let temp = cookies.replace(/\s/g, '');
    temp = temp.replace(/;/g, '&');

    const params = new URLSearchParams(temp);

    result = { language: params.get('language'), theme: params.get('theme'), palette: params.get('palette') };

    return result;
};

interface cookiesContent {
    language: string | null,
    theme: string | null,
    palette: string | null
};