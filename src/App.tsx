//Base
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Pages
import Characters from './pages/characters';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/characters" /> } />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
