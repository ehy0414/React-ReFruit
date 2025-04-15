import styled from "styled-components";
import PromotionalBanner from "../modules/homePage/header/PromotionalBanner";
import SaleTimer from "../modules/homePage/timeSale/SaleTimer";
import { ProductList } from "../modules/homePage/timeSale/ProductList";
import ViewAllProductsButton from "../modules/homePage/timeSale/ViewAllProductsButton";
import CategoryTitle from "../modules/homePage/category/CategoryTitle";
import CategoryList from "../modules/homePage/category/CategoryList";
import Footer from "../components/layout/footer/Footer";

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

    return(
        <Wrapper>
            <PromotionalBanner />
            <SaleTimer  title="오늘의 상품" 
                        subTitle="SALE 상품"
                        count={true} />
            <ProductList />
            <ViewAllProductsButton path="/refruit/sale" />
            <Lines />
            <CategoryTitle />
            <CategoryList />
            <Lines />    
            <SaleTimer  title="이달의 상품" 
                        subTitle="이달의 주인공"
                        count={false} />
            <ProductList />
            <ViewAllProductsButton path="/refruit/most" />
            <Footer />
        </Wrapper>
    );
}