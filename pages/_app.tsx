import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import '../styles/accordion.scss'
import App, { AppContext, AppProps } from 'next/app';
import { buildLightTheme, buildDarkTheme } from '../services/Themes';
import { CookiesProvider, useCookies } from 'react-cookie';
import { loadTheme, ThemeProvider } from '@fluentui/react';
import { addDays, cookiesContent, isNavigatorLanguageItalian, parseCookies } from '../services/Utils';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { registerIcons, setIconOptions } from '@fluentui/react/lib/Styling';
import { registeredIcons } from 'services/Icons';
import { useEffect } from "react";
import { GlobalProvider } from 'services/GlobalContext';
import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LocalizationService from "../services/LocalizationService";
import PrivacyPolicyDialog from 'components/Atoms/PrivacyPolicyDialog';

setIconOptions({ disableWarnings: true });
registerIcons({ icons: registeredIcons });
initializeIcons();

const CustomApp = ({ Component, pageProps, requestLanguage, ssrCookies }: AppProps & { requestLanguage: string, ssrCookies: cookiesContent }) => {
    const Comp = Component as any; // TODO: fix this

    let [cookies, setCookie] = useCookies();
    
    let [theme, setTheme] = React.useState(ssrCookies.theme ?? false);
    let [palette, setPalette] = React.useState(ssrCookies.palette ?? "a");
    let [language, setLanguage] = React.useState(ssrCookies.language ?? requestLanguage);

    let [lightTheme, setLightTheme] = React.useState(buildLightTheme(palette));
    let [darkTheme, setDarkTheme] = React.useState(buildDarkTheme(palette));

    const date: Date = addDays(new Date(), 90);
    const policyDate: Date = addDays(new Date(), 360);

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

    /* Initialization of cookies */
    useEffect(() => {
        if (cookies["language"] === undefined) setCookie("language", language, { path: "/", expires: date });
        if (cookies["theme"] === undefined) setCookie("theme", theme ? "dark" : "light", { path: "/", expires: date });
        if (cookies["palette"] === undefined) setCookie("palette", palette, { path: "/", expires: date });
        if (cookies["isPolicyAccepted"] === undefined) setCookie("isPolicyAccepted", false, { path: "/", expires: policyDate });
    }, []);

    useEffect(() => {
        setLightTheme(buildLightTheme(palette));
        setDarkTheme(buildDarkTheme(palette));
        loadTheme(theme ? darkTheme : lightTheme);
        LocalizationService.localize(language);
    }, [language, palette, theme]);
    
    LocalizationService.localize(language);

    return (
        <>
            {/* Shared head properties */}
            <Head>
                <link rel="icon" href="/logo/unimi150.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="author" content="Network StudentiUniMi" />
                <meta httpEquiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://studentiunimi.it https://code.jquery.com https://cdn.jsdelivr.net https://p.studentiunimi.it; font-src * data:;" />
            </Head>

            {/* Main webapp structure */}
            <CookiesProvider>
                <ThemeProvider applyTo="body" theme={theme ? darkTheme : lightTheme}>
                    <GlobalProvider>
                        <div className="App">
                            <Header />
                            <Comp {...pageProps} />
                            <PrivacyPolicyDialog />
                            <Footer 
                                appTheme={theme}
                                language={language}
                                palette={palette}
                                changeTheme={changeTheme} 
                                changePalette={changePalette} 
                                changeLanguage={changeLanguage} 
                            />
                        </div>
                    </GlobalProvider>
                </ThemeProvider>
            </CookiesProvider>

            {/* Self-hosted Plausible Web Analytics */}
            <Script defer data-domain="studentiunimi.it" src="https://p.studentiunimi.it/js/script.js" />
        </>
    )
};

CustomApp.getInitialProps = async (appContext: AppContext) => {
    const ctx = await App.getInitialProps(appContext);
    const parsedCookies = parseCookies(appContext.ctx.req?.headers.cookie!);
    const requestLanguage = isNavigatorLanguageItalian(appContext.ctx.req?.headers['accept-language']!) ? "it" : "en";

    return { ...ctx, requestLanguage: requestLanguage, ssrCookies: parsedCookies };
};

export default CustomApp;