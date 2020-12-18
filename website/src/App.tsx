/*
TODO LIST
- Aggiungere target="_blank" a tutti i link
- Sistemare le card che si sovrappongono ma devono rimanere centrate
- Filtri sulla lista di corsi
- Fare tutte le faq in markdown compresi regolamento e roba sui drive, in questo modo non si dovrà scaricare nessun pdf
- Sezione about per chi ha contribuito (magari anche chi ha fatto delle faq)
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