import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import HeaderTitle from "../components/HeaderTitle";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import ContentView from "./ContentView";
import { ThemeProvider } from '@fluentui/react-theme-provider'; 
import { darkTheme, lightTheme } from '../themes';
import { CookiesProvider, useCookies } from 'react-cookie';
import LocalizationService from '../services/LocalizationService';

const MainView = () => {
  let [cookies, ] = useCookies();
  let [theme, setTheme] = React.useState(cookies["theme"] === "dark");
  LocalizationService.localize(cookies['language']);

  const changeTheme = () => setTheme(!theme);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <CookiesProvider>
        <ThemeProvider applyTo="body" theme={theme ? darkTheme : lightTheme}>
          <header>
            <HeaderTitle />
            <HeaderMenu changeTheme={changeTheme}/>
          </header>
          <ContentView/>
          <Footer />
        </ThemeProvider>
      </CookiesProvider>
    </Router>
  );
}

export default MainView;