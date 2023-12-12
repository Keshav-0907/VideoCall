import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Lobby from './pages/Lobby';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Lobby />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
