// Base
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// Styles
import './styles/index.css';
import 'primereact/resources/primereact.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
// Components
import App from './App';
// Store
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render( 
  <Provider store={store}>
    <App />
  </Provider>
);
