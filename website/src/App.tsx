/*
TODO LIST
- Dividere in cartelle (Views, Components)
- FaqProposer -> serve un bottone che invia i dati a un semplice file txt o qualcosa del genere, quindi presumo serve una gestione del file
- Sezione about per chi ha contribuito
- Footer con social di Unimi
- Vedi storybook
- Fare scrollbar apposita per le card generate
- Filtro sulla lista
- IL MENU DEVE DIVENTARE DIVERSO QUANDO LA WIDTH RAGGIUNGE UN CERTO VALORE; ALTRIMENTI ROMPE TUTTO specialmente se aggiungi sezioni
- Aggiungere logo al meta del file html
- Vedi come dare un drive per ogni cdl -> basta mettere il documento con la lista dei drive per ogni cdl
*/

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div>
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