/*
TODO LIST
- Sezione corsi, fai "amministratore" che porta alla sezione relativa
- Se selezioni info mag blocchi il dropdown con disabled
- Tema scuro
- Hash commit nel footer
- Premi una faq (devi creare una faqView) che premi e mostra un callout o dialog o MODAL, quella che appare proprio una finestra nuova e puoi chiudere.
- Costruire la gerarchia del network, fai un file .psd così lo tieni aggiornato facilmente
- Sistemare le descrizioni dei gruppi per ogni cdl
- Futura ristrutturazione: card con solo icone + hover sopra che mostra tooltip
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