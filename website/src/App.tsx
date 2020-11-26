/*
TODO LIST
- Homepage da sistemare, serve un insieme di link come discord, regolamento, ecc.
- Da creare la struttura lista per l'insieme di corsi
- Rinomina homepage in home
- Linguetta a lato dice gli aggiornamenti
- Rinomina groups in Courses
- Gli array dei cdl andranno in un json a parte
- Centrare il content così la roba va al centro
- Dividere in cartelle (Views, Components)

*/

import React, { useState } from "react";
import "./App.css";
import HeaderTitle from "./HeaderTitle";
import Content from "./Content";
import HeaderMenu, { ItemsKeys } from "./HeaderMenu"; // da qui prende il content selezionato
import Footer from "./Footer";

function App() {
  let [selectedView, setSelectedView] = React.useState(ItemsKeys.homepage);

  const contentChanged = (s: ItemsKeys) => {
    setSelectedView(s);
  };

  return (
    <div id="main-container">
      <div id="header">
        <HeaderTitle />
        <HeaderMenu contentChanged={contentChanged} />
      </div>
      <Content view={selectedView} />
      <Footer />
    </div>
  );
}

export default App; // Per usare la funzione App (il componente) bisogna esportarlo.
