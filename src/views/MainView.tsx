import { HashRouter as Router } from "react-router-dom";
import HeaderTitle from "../components/HeaderTitle";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import ContentView from "./ContentView";
import { loadTheme } from '@fluentui/react';

loadTheme({
  //defaultFontStyle: {  fontWeight: 'regular' },
  fonts: {
    small: {
      fontSize: '12px',
    },
    medium: {
      fontSize: '14px',
    },
    large: {
      fontSize: '20px',
      fontWeight: 'semibold',
    },
    xLarge: {
      fontSize: '22px',
      fontWeight: 'semibold',
    },
  },
});

function MainView() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header>
        <HeaderTitle />
        <HeaderMenu />
      </header>
      <ContentView/>
      <Footer />
    </Router>
  );
}

export default MainView;