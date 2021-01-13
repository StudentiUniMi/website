/*
TODO LIST
- Pulsante per switchare tra ssri e ssri online. Usa un basic toggle con callout visualizzato tramite hover
- Sezione del sito sulla lista di rappresentanti (magari usa i componenti person)
- sezione riguardo faq sulla didattica a distanza (aspetta comunicazioni ufficiali)
- Sezione del sito con manifesti e informazioni globali sui cdl, e anche la guida sul come disiscriversi dalle liste mail
- Homepage con news prelevate dal sito di unimia
- Tema scuro
- Hash commit nel footer
- Costruire la gerarchia del network, fai un file .psd così lo tieni aggiornato facilmente
- Futura ristrutturazione: card con solo icone + hover sopra che mostra tooltip
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