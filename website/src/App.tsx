/*
TODO LIST
- Aggiungere "Gruppo disponibili" prima delle card generate
- Sistemare le card che si sovrappongono in mobile mode DA MIGLIORARE
- Quando vai sul sito con risorsa specificata /corsodilaurea il sito viene caricato già con la lista dei corsi per quel cdl (dentro la sezione gruppi e faq).
- Il menù deve diventare diverso quando la width raggiunge un certo valore, altrimenti rompe tutto. Vedi se puoi usare la navbar di bootstrap o fluentui ha già qualcosa
- FaqProposer -> serve un bottone che invia i dati a un semplice file txt o qualcosa del genere, quindi presumo serve una gestione del file
- Filtri sulla lista di corsi
- Quando premi sul pdf del drive dovrebbe fartelo scaricare invece di reindirizzare sulla repo github dove non vanno i link
- Sezione about per chi ha contribuito
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