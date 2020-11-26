import React, { useState } from 'react';
import './App.css';
import HeaderTitle from './HeaderTitle'
import Content from './Content'
import HeaderMenu, { ItemsKeys } from './HeaderMenu'  // da qui prende il content selezionato
import Footer from './Footer'

function App() {
  let [selectedView, setSelectedView] = React.useState(
    ItemsKeys.homepage
  );

  const contentChanged = (s: ItemsKeys) => {
    setSelectedView(s)
  }

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

export default App;   // Per usare la funzione App (il componente) bisogna esportarlo.