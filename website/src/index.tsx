import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // Importo l'app
import reportWebVitals from './reportWebVitals';

ReactDOM.render(  // Specifico per il web, ha a che fare con il dom.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Dentro il root vado a mettere l'app che ho creato
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
