import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/header/Header';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import FruitDetailPage from './pages/FruitDetailPage';
import OrderFruitPage from './pages/OrderFruitPage';
import WishlistPage from './pages/WishlistPage';
import { WishlistProvider } from './context/WishListContext';
import SearchPage from './pages/SearchPage';
import ViewSaleFruitPage from './pages/ViewSaleFruitPage';
import ViewMonthFruitPage from './pages/ViewMonthFruitPage';

function App() {
  return (
    <BrowserRouter>
      <WishlistProvider>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage />} />

        {/* 상품 상세페이지 */}
        <Route path='/fruit/detail/:id' element={<FruitDetailPage />} />

        {/* 상품 구매페이지 */}
        <Route path='/purchase/:id' element={<OrderFruitPage />} />

        {/* 세일, 이달상품 전체페이지 */}
        <Route path='/refruit/sale' element={<ViewSaleFruitPage />} />
        <Route path='/refruit/most' element={<ViewMonthFruitPage />} />

        {/* 위시리스트 페이지 */}
        <Route path='/wishlist' element={<WishlistPage />} />

        {/* 검색 결과 페이지 */}
        <Route path="/search" element={<SearchPage />} />

      </Routes>
      </WishlistProvider>
    </BrowserRouter>
  );
}

export default App;
