import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import Content from './Content'
import Menu, { ItemsKeys } from './Menu'

function App() {
  let [selectedView, setSelectedView] = React.useState(
    ItemsKeys.homepage
  );

  const contentChanged = (s: ItemsKeys) => {
    setSelectedView(s)
  }

  return (
    <div>
      <Header />
      <Menu contentChanged={contentChanged} />
      <Content view={selectedView} />
    </div>
  );
}

export default App;   // Per usare la funzione App (il componente) bisogna esportarlo.
