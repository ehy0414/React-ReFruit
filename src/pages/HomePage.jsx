import styled from "styled-components";
import PromotionalBanner from "../modules/homePage/PromotionalBanner";
import SaleTimer from "../modules/homePage/timeSale/SaleTimer";
import ProductCard from "../modules/homePage/timeSale/ProductCard";
import { ProductList } from "../modules/homePage/timeSale/ProductList";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export function HomePage() {

    return(
        <Wrapper>
            <PromotionalBanner />
            <SaleTimer />
            <ProductList />
        </Wrapper>
    );
}