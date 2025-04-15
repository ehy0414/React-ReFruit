import React, { useRef } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  width: 77%;
  margin-left: 10%;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  cursor: pointer;
`;

export function ProductList() {
  const wrapperRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    wrapperRef.current.classList.add("active");
    startX = e.pageX - wrapperRef.current.offsetLeft;
    scrollLeft = wrapperRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    wrapperRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown = false;
    wrapperRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrapperRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // 속도 조절
    wrapperRef.current.scrollLeft = scrollLeft - walk;
  };

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
    <Wrapper
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Wrapper>
  );
}
