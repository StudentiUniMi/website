/*
TODO LIST
- Filtri sulla lista dei corsi generati
- Aggiungere i drive delle magistrali alla lista
- Fare tutte le faq in markdown compresi regolamento e roba sui drive, in questo modo non si dovrà scaricare nessun pdf
- Costruire la gerarchia del network, fai un file .psd così lo tieni aggiornato facilmente
- Sistemare le descrizioni dei gruppi per ogni cdl
- Aggiungere target="_blank" a tutti i link
- Una sezione contenente manifesti e altre informazioni globali per ogni cdl
- Sezione about per chi ha contribuito (magari anche chi ha fatto delle faq)
*/

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import HeaderTitle from "./HeaderTitle";
import Content from "./Content";
import HeaderMenu, { ItemsKeys } from "./HeaderMenu";
import Footer from "./Footer";
import { HashRouter as Router } from "react-router-dom";

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