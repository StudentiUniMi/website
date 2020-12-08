/*
TODO LIST
- Sistemare le card che si sovrappongono in mobile mode. OK ma da migliorare
- Filtri sulla lista di corsi
- Quando premi sul pdf del drive dovrebbe fartelo scaricare invece di reindirizzare sulla repo github dove non vanno i link
- Sezione about per chi ha contribuito (magari anche chi ha fatto delle faq)
- Sezione amministratori per far sapere chi contattare per ogni cdl. Una colonna per ogni cdl con gli admin
- Sezione relativa a chi contattare per ogni corso di laurea (amministratori), può servire per dare un riepilogo totale. fai varie colonne ciascuna con gli admin ecc.
- Footer con social di Unimi
*/

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import HeaderTitle from "./HeaderTitle";
import Content from "./Content";
import HeaderMenu, { ItemsKeys } from "./HeaderMenu"; // da qui prende il content selezionato
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";

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

export default App; // Per usare la funzione App (il componente) bisogna esportarlo.