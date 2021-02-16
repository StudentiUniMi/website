import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import HeaderTitle from "../components/HeaderTitle";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import ContentView from "./ContentView";
import { ThemeProvider } from '@fluentui/react-theme-provider'; 
import { darkTheme, lightTheme } from '../themes';
// import { loadTheme } from '@fluentui/react';

const MainView = () => {
  const [theme, setTheme] = React.useState(false);
  // loadTheme(theme ? darkTheme : lightTheme);
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider applyTo="body" theme={theme ? darkTheme : lightTheme}>
        <header>
          <HeaderTitle />
          <HeaderMenu theme={theme} setTheme={setTheme} />
        </header>
        <ContentView/>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default MainView;