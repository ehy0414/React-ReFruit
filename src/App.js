import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/header/Header';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import FruitDetailPage from './pages/FruitDetailPage';
import OrderFruitPage from './pages/OrderFruitPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage />} />

        {/* 상품 상세페이지 */}
        <Route path='/fruit/detail/:id' element={<FruitDetailPage />} />

        {/* 상품 구매페이지 */}
        <Route path='/purchase' element={<OrderFruitPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
