import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContentView from "./ContentView";
import LocalizationService from "../services/LocalizationService";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@fluentui/react-theme-provider'; 
import { buildLightTheme, buildDarkTheme } from '../services/themes';
import { CookiesProvider, useCookies, withCookies } from 'react-cookie';
import { loadTheme } from '@fluentui/react';
import { addDays } from '../services/Utils';

const MainView = () => {
  let [cookies, setCookie] = useCookies();
  let [theme, setTheme] = React.useState(cookies["theme"] === 'dark');
  let [palette, setPalette] = React.useState(cookies["palette"]);

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

  loadTheme(theme ? darkTheme : lightTheme);

  if (cookies['language'] === undefined) { 
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

  if (cookies["palette"] === undefined) 
  { 
      setCookie("palette", "a", { path: "/", expires: date });
  }

  if (cookies['language'] === undefined) { 
      const isNavLanguageITA = isNavigatorLanguageItalian();
      setCookie("language", (isNavLanguageITA ? 'it' : 'en'), { path: "/", expires: date }); 
  }

  LocalizationService.localize(cookies['language']);
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <CookiesProvider>
        <ThemeProvider applyTo="body" theme={theme ? darkTheme : lightTheme}>
          <Header/>
          <ContentView/>
          <Footer changeTheme={changeTheme} changePalette={changePalette}/>
        </ThemeProvider>
      </CookiesProvider>
    </Router>
  );
}

export default withCookies(MainView);

/**
 * This function returns true if the navigator language is italian.
 */
 const isNavigatorLanguageItalian = () => {
  const navLanguage = navigator.language;
  if (navLanguage === 'it') return true;

  const s: string[] = navLanguage.split("-",2);
  if (s.length >= 2 && s[0] === 'it') return true;
  return false;
}