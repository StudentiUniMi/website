import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import HeaderTitle from "./HeaderTitle";
import HeaderMenu from "./HeaderMenu";
import Content from "./Content";
import Footer from "./Footer";

function App() {
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

export default App;