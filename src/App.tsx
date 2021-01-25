/*
TODO LIST
-1 Sezione dei corsi di laurea, ci mettiamo un pulsantino per switchare tra gruppi e informazioni generali
-2 Sempre nella sezione dei corsi devi poter selezionare il dipartimento e poi i vari corsi di laurea
- Pulsante per switchare tra ssri e ssri online. Usa un basic toggle con callout visualizzato tramite hover
- Sezione del sito sulla lista di rappresentanti (magari usa i componenti person)
- Sezione riguardo faq sulla didattica a distanza (aspetta comunicazioni ufficiali)
- Sezione del sito con manifesti e informazioni globali sui cdl, e anche la guida sul come disiscriversi dalle liste mail
- Homepage con news prelevate dal sito di unimia
- Pulsante per switchare al tema scuro
- Trova un modo per passare da italiano a inglese per eventuali studenti stranieri
- Hash commit nel footer
- Costruire la gerarchia del network, fai un file .psd così lo tieni aggiornato facilmente
- Futura ristrutturazione: card con solo icone + hover sopra che mostra tooltip
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
    <Router basename={process.env.PUBLIC_URL}>
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