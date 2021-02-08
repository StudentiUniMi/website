import { HashRouter as Router } from "react-router-dom";
import HeaderTitle from "../components/HeaderTitle";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import ContentView from "./ContentView";

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