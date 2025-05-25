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
import ReceiptListPage from './pages/ReceiptListPage';
import AppleListPage from './pages/category/AppleListPage';
import OrangeListPage from './pages/category/OrangeListPage';
import GrapeListPage from './pages/category/GrapeListPage';
import KiwiListPage from './pages/category/KiwiListPage';
import WatermelonListPage from './pages/category/WatermelonListPage';
import MangoListPage from './pages/category/MangoListPage';
import AdminProductPage from './pages/AdminProductsPage';
import AdminFormPage from './pages/AdminFormPage';
import ProfilePage from './pages/ProfilePage';
import WriteReviewPage from './pages/review/WriteReviewPage';
import ReviewsPage from './pages/review/ReviewsPage';

function App() {
  return (
    <BrowserRouter>
      <WishlistProvider>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage />} />
        {/* 프로필 페이지 */}
        <Route path='/profile' element={<ProfilePage />} />

        {/* 상품 상세페이지 */}
        <Route path='/fruit/detail/:id' element={<FruitDetailPage />} />

        {/* 상품 구매페이지 */}
        <Route path='/purchase/:id' element={<OrderFruitPage />} />

        {/* 세일, 이달상품 전체페이지 */}
        <Route path='/refruit/sale' element={<ViewSaleFruitPage />} />
        <Route path='/refruit/most' element={<ViewMonthFruitPage />} />

        {/* 카테고리 페이지 */}
        <Route path='/refruit/apple' element={<AppleListPage />} />
        <Route path='/refruit/orange' element={<OrangeListPage />} />
        <Route path='/refruit/grape' element={<GrapeListPage />} />
        <Route path='/refruit/kiwi' element={<KiwiListPage />} />
        <Route path='/refruit/watermelon' element={<WatermelonListPage />} />
        <Route path='/refruit/mango' element={<MangoListPage />} />

        {/* 위시리스트 페이지 */}
        <Route path='/wishlist' element={<WishlistPage />} />

        {/* 검색 결과 페이지 */}
        <Route path="/search" element={<SearchPage />} />

        {/* 영수증 페이지 */}
        <Route path="/orders" element={<ReceiptListPage />} />

        {/* 관리자 페이지 */}
        <Route path="/admin/products" element={<AdminProductPage />} />
        <Route path="/admin/products/new" element={<AdminFormPage />} />
        <Route path="/admin/products/edit/:id" element={<AdminFormPage isEdit={true} />} /> 

        {/* 리뷰 페이지 */}
        <Route path="/review/write" element={<WriteReviewPage/>} /> 
        <Route path="/review" element={<ReviewsPage/>} /> 

      </Routes>
      </WishlistProvider>
    </BrowserRouter>
  );
}

export default App;
