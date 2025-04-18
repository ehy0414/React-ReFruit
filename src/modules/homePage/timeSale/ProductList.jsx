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

export function ProductList({products}) {
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
