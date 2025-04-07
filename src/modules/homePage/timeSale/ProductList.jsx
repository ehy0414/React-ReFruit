import styled from "styled-components";
import ProductCard from "./ProductCard";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px; /* 카드 간 간격 */
    overflow-x: auto;
    padding: 16px;
    width: 77%;
    margin-left: 10%;
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
    }
`;


export function ProductList() {
    return (
        <Wrapper>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Wrapper>
    );
}