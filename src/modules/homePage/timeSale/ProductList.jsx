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
    const products = [
        {
          id: 1,
          title: "HAVIT HV-G92 Gamepad",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c294479147fb98a8501bd8b224b5735f97c19f58",
          currentPrice: "$120",
          originalPrice: "$160",
          discount: "-40%",
          reviewCount: 88,
        },
        {
          id: 2,
          title: "Logitech G Pro X",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c294479147fb98a8501bd8b224b5735f97c19f58",
          currentPrice: "$150",
          originalPrice: "$200",
          discount: "-25%",
          reviewCount: 102,
        },
        {
            id: 3,
            title: "Logitech G Pro X",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c294479147fb98a8501bd8b224b5735f97c19f58",
            currentPrice: "$150",
            originalPrice: "$200",
            discount: "-25%",
            reviewCount: 102,
          },
          {
            id: 4,
            title: "Logitech G Pro X",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c294479147fb98a8501bd8b224b5735f97c19f58",
            currentPrice: "$150",
            originalPrice: "$200",
            discount: "-25%",
            reviewCount: 102,
          },
          {
            id: 5,
            title: "Logitech G Pro X",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c294479147fb98a8501bd8b224b5735f97c19f58",
            currentPrice: "$150",
            originalPrice: "$200",
            discount: "-25%",
            reviewCount: 102,
          },
          {
            id: 6,
            title: "Logitech G Pro X",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c294479147fb98a8501bd8b224b5735f97c19f58",
            currentPrice: "$2",
            originalPrice: "$200",
            discount: "-11%",
            reviewCount: 132,
          },
      ];

      
    return (
        <Wrapper>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Wrapper>
    );
}