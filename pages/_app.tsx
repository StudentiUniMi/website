import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/University/Slider/slider.scss';
import '../styles/index.scss';
import { AppProps } from 'next/app'
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { buildLightTheme, buildDarkTheme } from '../services/Themes';
import { CookiesProvider, useCookies } from 'react-cookie';
import { loadTheme } from '@fluentui/react';
//import { getCookie, setCookie } from 'cookies-next';
import { addDays } from '../services/Utils';
import { initializeIcons } from '@fluentui/react';
import { setIconOptions } from '@fluentui/react/lib/Styling';
import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LocalizationService from "../services/LocalizationService";
import { GetServerSideProps } from "next/types";

initializeIcons();
setIconOptions({ disableWarnings: true }); // TODO: register icons to avoid warning

const App = ({ Component, pageProps }: AppProps) => {
    let [cookies, setCookie] = useCookies();
    let [theme, setTheme] = React.useState(cookies["theme"] === 'dark');
    let [palette, setPalette] = React.useState(cookies["palette"]);
    let [language, setLanguage] = React.useState(cookies["language"]);

    let [lightTheme, setLightTheme] = React.useState(buildLightTheme(palette));
    let [darkTheme, setDarkTheme] = React.useState(buildDarkTheme(palette));

    const date: Date = addDays(new Date(), 90);

    const changeTheme = () => {
        setTheme(!theme);
    };

    const changePalette = (id: string) => {
        setPalette(id);
        setLightTheme(buildLightTheme(id));
        setDarkTheme(buildDarkTheme(id));
    };

    const changeLanguage = (language: string) => {
        setLanguage(language);
    };

    if (cookies["language"] === undefined) {
        const isNavLanguageITA = isNavigatorLanguageItalian();
        setCookie("language", (isNavLanguageITA ? 'it' : 'en'), { path: "/", expires: date });
    }

    if (cookies["theme"] === undefined) {
        setCookie("theme", "light", { path: "/", expires: date });
    }

    if (cookies["palette"] === undefined) {
        setCookie("palette", "a", { path: "/", expires: date });
    }

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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    let acceptlang = req.headers["accept-language"]
    console.log("accept language: ", acceptlang)

    return { props: { 
        acceptlang: acceptlang
    } };
};

export default App;

/**
 * This function returns true if the navigator language is italian.
 */
const isNavigatorLanguageItalian = () => {
    /* TODO: FIX THIS
    const navLanguage = navigator.language;
    if (navLanguage === 'it') return true;
    const s: string[] = navLanguage.split("-", 2);
    if (s.length >= 2 && s[0] === 'it') return true;
    return false;
    */
   return true;
}