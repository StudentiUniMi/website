import { HashRouter as Router } from "react-router-dom";
import HeaderTitle from "../components/HeaderTitle";
import HeaderMenu from "../components/HeaderMenu";
import Content from "../components/Content";
import Footer from "../components/Footer";

function MainView() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header>
        <HeaderTitle />
        <HeaderMenu />
      </header>
      <Content/>
      <Footer />
    </Router>
  );
}

export default MainView;