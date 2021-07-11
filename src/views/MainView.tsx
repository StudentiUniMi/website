import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import HeaderTitle from "../components/HeaderTitle";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import ContentView from "./ContentView";
import { ThemeProvider } from '@fluentui/react-theme-provider'; 
import { ThemesInizialization } from '../themes';
import { CookiesProvider, useCookies } from 'react-cookie';

const MainView = () => {
  let [cookies, ] = useCookies();
  let [theme, setTheme] = React.useState(cookies["theme"] === "dark");
  let [, setPalette] = React.useState(cookies["paletteID"]);

  let [lightTheme, setLightTheme] = React.useState(ThemesInizialization(cookies["paletteID"])[0]);
  let [darkTheme, setDarkTheme] = React.useState(ThemesInizialization(cookies["paletteID"])[1]);

  const changeTheme = () => setTheme(!theme);

  const changePalette = (id: string): void => {
    setPalette(id);
    setLightTheme(ThemesInizialization(id)[0]); 
    setDarkTheme(ThemesInizialization(id)[1]);
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <CookiesProvider>
        <ThemeProvider applyTo="body" theme={theme ? darkTheme : lightTheme}>
          <header>
            <HeaderTitle />
            <HeaderMenu changeTheme={changeTheme} changePalette={changePalette} />
          </header>
          <ContentView/>
          <Footer />
        </ThemeProvider>
      </CookiesProvider>
    </Router>
  );
}

export default MainView;