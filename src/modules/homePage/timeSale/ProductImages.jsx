import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  height: 103px;
  gap: 8px;
  justify-content: start;
  margin-left: 45%;
  margin-top: -50px;

`;

const ProductImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 46px;
  flex-shrink: 0;
`;

export const ProductImages = () => {
  return (
    <ImageContainer>
      <ProductImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2f1b2d6249d5ccc6cfcf24813c1aae14971ae67?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c" alt="Product" />
      <ProductImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/8271d935e46f125b1a3097a196b761daf33d8c5d?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c" alt="Product" />
    </ImageContainer>
  );
};
