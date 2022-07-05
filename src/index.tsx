import ReactDOM from 'react-dom';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import MainView from './views/MainView';

const rootElement = document.getElementById("root");

if (rootElement!.hasChildNodes()) {
  ReactDOM.hydrate(<MainView />, rootElement);
} else {
  ReactDOM.render(<MainView />, rootElement);
}