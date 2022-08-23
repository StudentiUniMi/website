import * as React from 'react'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.scss';
import '../src/components/University/Slider/slider.scss';
import { AppProps } from 'next/app'
import Head from 'next/head';
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import LocalizationService from "../src/services/LocalizationService";
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { buildLightTheme, buildDarkTheme } from '../src/services/Themes';
import { CookiesProvider, useCookies, withCookies } from 'react-cookie';
import { loadTheme } from '@fluentui/react';
import { addDays } from '../src/services/Utils';

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
        /*
        // This is theme initialization based on browser; this isn't working, so I must fix this.
        setCookie("theme", "light", { path: "/", expires: date }); 
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) themeToggled();
        */
        setCookie("theme", "light", { path: "/", expires: date });
    }

    if (cookies["palette"] === undefined) {
        setCookie("palette", "a", { path: "/", expires: date });
    }

    loadTheme(theme ? darkTheme : lightTheme);
    LocalizationService.localize(language);

    return (
        <>
            <CookiesProvider>
                <ThemeProvider applyTo="body" theme={theme ? darkTheme : lightTheme}>
                    <Header />
                    <Component {...pageProps} />
                    <Footer changeTheme={changeTheme} changePalette={changePalette} changeLanguage={changeLanguage} />
                </ThemeProvider>
            </CookiesProvider>
        </>
    )
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