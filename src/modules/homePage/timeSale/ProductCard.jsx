"use client";
import * as React from "react";
import styled from "styled-components";
import { HeartIcon, StarRating } from "./Icons";

const ProductCard = ({ product }) => {
    return (
      <CardWrapper>
        <ProductImageSection>
          <DiscountBadge>{product.discount}</DiscountBadge>
          <WishlistButton>
            <HeartIcon />
          </WishlistButton>
          <ImageContainer>
            <ProductImg src={product.image} alt={product.title} />
          </ImageContainer>
        </ProductImageSection>
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <PriceContainer>
            <CurrentPrice>{product.currentPrice}</CurrentPrice>
            <OriginalPrice>{product.originalPrice}</OriginalPrice>
          </PriceContainer>
          <RatingContainer>
            <StarRating />
            <ReviewCount>({product.reviewCount})</ReviewCount>
          </RatingContainer>
        </ProductInfo>
      </CardWrapper>
    );
  };
  

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 235px;
  height: 315px;
  @media (max-width: 991px) {
    width: 200px;
    height: auto;
  }
  @media (max-width: 640px) {
    width: 100%;
    max-width: 235px;
  }
`;



const ProductImageSection = styled.div`
  width: 235px;
  height: 200px;
  border-radius: 4px;
  position: relative;
  background-color: #f5f5f5;
  @media (max-width: 991px) {
    width: 200px;
    height: 170px;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
  }
`;



const DiscountBadge = styled.span`
  padding: 4px 12px;
  border-radius: 4px;
  position: absolute;
  left: 12px;
  top: 12px;
  color: #fafafa;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  background-color: #db4444;
`;

const WishlistButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 165px;
  height: 140px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 35px;
  top: 30px;
  @media (max-width: 991px) {
    width: 140px;
    height: 120px;
    left: 30px;
  }
  @media (max-width: 640px) {
    width: 80%;
    height: auto;
    position: relative;
    left: auto;
    top: auto;
    margin: 20px auto;
  }
`;



const ProductImg = styled.img`
  width: 150px;
  height: 130px;
  object-fit: contain;
  @media (max-width: 991px) {
    width: 120px;
    height: 100px;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
  }
`;


const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const ProductTitle = styled.h3`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const CurrentPrice = styled.span`
  color: #db4444;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const OriginalPrice = styled.span`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: line-through;
  opacity: 0.5;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const ReviewCount = styled.span`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  opacity: 0.5;
`;

export default ProductCard;
