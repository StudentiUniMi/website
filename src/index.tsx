import React from 'react';
import ReactDOM from 'react-dom';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import MainView from '../pages';

ReactDOM.render(
  <React.StrictMode>
    <MainView />
  </React.StrictMode>,
  document.getElementById('root')
);