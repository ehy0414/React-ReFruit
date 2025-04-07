import styled from "styled-components";
import PromotionalBanner from "../modules/homePage/header/PromotionalBanner";
import SaleTimer from "../modules/homePage/timeSale/SaleTimer";
import { ProductList } from "../modules/homePage/timeSale/ProductList";
import ViewAllProductsButton from "../modules/homePage/timeSale/ViewAllProductsButton";
import CategoryTitle from "../modules/homePage/category/CategoryTitle";
import CategoryList from "../modules/homePage/category/CategoryList";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Lines = styled.hr`
    margin-top: 3%;
    margin-bottom: 3%;
    width:80%
`;

export function HomePage() {

    return(
        <Wrapper>
            <PromotionalBanner />
            <SaleTimer />
            <ProductList />
            <ViewAllProductsButton />
            <Lines />
            <CategoryTitle />
            <CategoryList />
        </Wrapper>
    );
}