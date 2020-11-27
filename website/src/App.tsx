/*
TODO LIST
- Icone da sistemare in homepage, deve apparire un hoverino sotto che dice dove portano
- Da creare la struttura lista per l'insieme di corsi
- Linguetta a lato dice gli aggiornamenti
- Gli array dei cdl andranno in un json a parte
- Centrare il content così la roba va al centro (da sistemare)
- Dividere in cartelle (Views, Components)
- FaqProposer -> serve un bottone che invia i dati a un semplice file txt o qualcosa del genere, quindi presumo serve una gestione del file
- Sezione about per chi ha contribuito
- Footer con social di Unimi
- Vedi storybook
*/

import React, { useState } from "react";
import "./App.css";
import HeaderTitle from "./HeaderTitle";
import Content from "./Content";
import HeaderMenu, { ItemsKeys } from "./HeaderMenu"; // da qui prende il content selezionato
import Footer from "./Footer";

function App() {
  let [selectedView, setSelectedView] = React.useState(ItemsKeys.home);

  const contentChanged = (s: ItemsKeys) => {
    setSelectedView(s);
  };

  return (
    <div id="main-container">
      <header>
        <HeaderTitle />
        <HeaderMenu contentChanged={contentChanged} />
      </header>
      <Content view={selectedView} />
      <Footer />
    </div>
  );
}

export default App; // Per usare la funzione App (il componente) bisogna esportarlo.
;