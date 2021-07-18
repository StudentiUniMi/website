import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import HeaderTitle from "../components/HeaderTitle";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import ContentView from "./ContentView";
import { ThemeProvider } from '@fluentui/react-theme-provider'; 
import { buildLightTheme, buildDarkTheme } from '../themes';
import { CookiesProvider, useCookies, withCookies } from 'react-cookie';
import LocalizationService from '../services/LocalizationService';

const MainView = () => {
  let [cookies, ] = useCookies();
  let [theme, setTheme] = React.useState(cookies["theme"] === "dark");
  let [palette, setPalette] = React.useState(cookies["palette"]);
  LocalizationService.localize(cookies['language']);

  let [lightTheme, setLightTheme] = React.useState(buildLightTheme(palette));
  let [darkTheme, setDarkTheme] = React.useState(buildDarkTheme(palette));

  const changeTheme = () => {
    setTheme(!theme);
  };

  const changePalette = (id: string) => {
    setPalette(id);
    setLightTheme(buildLightTheme(id));
    setDarkTheme(buildDarkTheme(id));
  };

  const changeLanguage = (key: string) => {
    LocalizationService.localize(key);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <CookiesProvider>
        <ThemeProvider applyTo="body" theme={theme ? darkTheme : lightTheme}>
          <header>
            <HeaderTitle />
            <HeaderMenu changeTheme={changeTheme} changePalette={changePalette} changeLanguage={changeLanguage} />
          </header>
          <ContentView/>
          <Footer />
        </ThemeProvider>
      </CookiesProvider>
    </Router>
  );
}

export default withCookies(MainView);