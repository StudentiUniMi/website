import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import '../styles/accordion.scss'
import { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider, useTheme } from '@fluentui/react';
import { Theme } from '../services/Utils';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { loadTheme, registerIcons, setIconOptions } from '@fluentui/react/lib/Styling';
import { registeredIcons } from 'services/Icons';
import { GlobalProvider } from 'services/GlobalContext';
import { useContext } from 'react';
import { buildLightTheme } from 'services/Themes';
import GlobalContext from '../services/GlobalContext';
import Script from 'next/script';
import Head from 'next/head';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PrivacyPolicyDialog from 'components/Atoms/PrivacyPolicyDialog';
import LocalizationChangeDialog from 'components/Atoms/LocalizationChangeDialog';
import LocalizationService from 'services/LocalizationService';

/**
 * Enables SSR localization and theme.
 */
LocalizationService.localize("it");
loadTheme(buildLightTheme("a"));

setIconOptions({ disableWarnings: true });
registerIcons({ icons: registeredIcons });
initializeIcons();

const CustomApp = ({ Component, pageProps }: AppProps) => {
    const Comp = Component as any;
    {/* @ts-ignore */}
    const appTheme = useTheme();

    const { theme, lightTheme, darkTheme } = useContext(GlobalContext);

    return (
        <>
            {/* Shared head properties */}
            <Head>
                <link rel="icon" href="/logo/unimi150.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="author" content="Network StudentiUniMi" />
                <meta name="google" content="notranslate" />
                <meta httpEquiv="Content-Security-Policy" content="style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://studentiunimi.it https://code.jquery.com https://cdn.jsdelivr.net https://p.studentiunimi.it; font-src * data:;" />
            </Head>

            {/* Main webapp structure */}
            <CookiesProvider>
                <GlobalProvider>
                    <ThemeProvider applyTo="body" theme={theme === Theme.DARK ? darkTheme : lightTheme}>
                        <div className="App">
                            <Header />
                            <Comp {...pageProps} />
                            <PrivacyPolicyDialog />
                            <LocalizationChangeDialog />
                            <Footer />
                        </div>
                    </ThemeProvider>
                </GlobalProvider>
            </CookiesProvider>

            {/* Self-hosted Plausible Web Analytics */}
            <Script defer data-domain="studentiunimi.it" src="https://p.studentiunimi.it/js/script.js" />
        </>
    )
};

export default CustomApp;
