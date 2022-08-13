// Base
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
// Styles
import './styles/index.css';
import 'primereact/resources/primereact.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
// Components
import Characters from './pages/characters';
// Store
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render( 
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/rickandmortyapp" /> } />
        <Route path="/rickandmortyapp" element={ <Characters/> } />
      </Routes>
    </BrowserRouter>
  </Provider>
);
