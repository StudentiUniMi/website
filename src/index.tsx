import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import MainView from './views/MainView';

ReactDOM.render(
  <React.StrictMode>
    <MainView />
  </React.StrictMode>,
  document.getElementById('root')
);