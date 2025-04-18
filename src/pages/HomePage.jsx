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

    const getProducts = async () => {
        try {
            const res = await api.get("/products");
            setProducts(res.data);
            // 타입에 따라 필터링
            setSaleProducts(res.data.filter((product) => product.type === "sale"));
            setMonthlyProducts(res.data.filter((product) => product.type === "monthly"));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProducts();
    },[])

    return(
        <Wrapper>
            <PromotionalBanner />
            <SaleTimer  title="오늘의 상품" 
                        subTitle="SALE 상품"
                        count={true} />
            <ProductList products={saleProducts}/>
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