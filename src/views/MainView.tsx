import React, { useState } from 'react';
import { HashRouter as Router } from "react-router-dom";
import HeaderTitle from "../components/HeaderTitle";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import ContentView from "./ContentView";
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { darkTheme, lightTheme } from '../themes';
import { Toggle } from '@fluentui/react';

function MainView() {
  const [useDarkMode, setUseDarkMode] = useState(false);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider applyTo="body" theme={useDarkMode ? darkTheme : lightTheme}>
        <header>
          <HeaderTitle />
          <Toggle
            label="Change themes"
            onText="Dark Mode"
            offText="Light Mode"
            onChange={() => setUseDarkMode(!useDarkMode)}
          />
          <HeaderMenu />
        </header>
        <ContentView/>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default MainView;