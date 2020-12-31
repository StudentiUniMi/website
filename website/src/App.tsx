/*
TODO LIST
- Tema scuro
- Aggiungere i drive delle magistrali alla lista
- Decidere cosa fare riguardo la struttura delle faq
- Costruire la gerarchia del network, fai un file .psd così lo tieni aggiornato facilmente
- Sistemare le descrizioni dei gruppi per ogni cdl
- Aggiungere target="_blank" a tutti i link
- Una sezione contenente manifesti e altre informazioni globali per ogni cdl
- Sezione about per chi ha contribuito (magari anche chi ha fatto delle faq)
*/

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import HeaderTitle from "./HeaderTitle";
import HeaderMenu, { ItemsKeys } from "./HeaderMenu";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  let [selectedView, setSelectedView] = React.useState(ItemsKeys.home);

  const contentChanged = (s: ItemsKeys) => {
    setSelectedView(s);
  };

  return (
    <Router>
      <header>
        <HeaderTitle />
        <HeaderMenu contentChanged={contentChanged} />
      </header>
      <Content view={selectedView} />
      <Footer />
    </Router>
  );
}

export default App;