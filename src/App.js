import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Header } from './components/layout/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
