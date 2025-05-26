import styled from "styled-components";
import PromotionalBanner from "../modules/homePage/header/PromotionalBanner";
import SaleTimer from "../modules/homePage/timeSale/SaleTimer";
import { ProductList } from "../modules/homePage/timeSale/ProductList";
import ViewAllProductsButton from "../modules/homePage/timeSale/ViewAllProductsButton";
import CategoryTitle from "../modules/homePage/category/CategoryTitle";
import CategoryList from "../modules/homePage/category/CategoryList";
import Footer from "../components/layout/footer/Footer";
import api from "../api/axios";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Lines = styled.hr`
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left: 10%;
    width:79%
`;

export function HomePage() {
    const [products, setProducts] = useState([]);
    const [saleProducts, setSaleProducts] = useState([]);
    const [monthlyProducts, setMonthlyProducts] = useState([]);
    const [saleEnded, setSaleEnded] = useState(false);
    const [reviews, setReviews] = useState([]);

    const getProductsAndReviews = async () => {
    try {
        const [productsRes, reviewsRes] = await Promise.all([
        api.get("/products"),
        api.get("/reviews")
        ]);

        const productsData = productsRes.data;
        const reviewsData = reviewsRes.data;

        // 각 product에 평균 별점과 리뷰 개수 추가
        const updatedProducts = productsData.map(product => {
        const productReviews = reviewsData.filter(review => review.fruitId === String(product.id));
        const reviewCount = productReviews.length;
        const averageRating = reviewCount === 0
            ? 0
            : productReviews.reduce((acc, cur) => acc + cur.rating, 0) / reviewCount;

        return {
            ...product,
            averageRating: averageRating.toFixed(1),
            reviewCount
        };
        });

        setProducts(updatedProducts);
        setSaleProducts(updatedProducts.filter(p => p.type === "sale"));
        setMonthlyProducts(updatedProducts.filter(p => p.type === "monthly"));
    } catch (error) {
        console.error("데이터 불러오기 실패:", error);
    }
    };

    useEffect(() => {
    getProductsAndReviews();
    }, []);

    return(
        <Wrapper>
            <PromotionalBanner />
            <SaleTimer  title="오늘의 상품" 
                        subTitle="SALE 상품"
                        count={true}
                        onExpire={() => setSaleEnded(true)} // 만료 시 상태 변경
             />
            <ProductList products={saleProducts} saleEnded={saleEnded}/>
            <ViewAllProductsButton path="/refruit/sale" />
            <Lines />
            <CategoryTitle />
            <CategoryList />
            <Lines />    
            <SaleTimer  title="이달의 상품" 
                        subTitle="이달의 주인공"
                        count={false} />
            <ProductList products={monthlyProducts}/>
            <ViewAllProductsButton path="/refruit/most" />
            <Footer />
        </Wrapper>
    );
}