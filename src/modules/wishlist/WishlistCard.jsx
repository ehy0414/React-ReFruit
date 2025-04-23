"use client";
import styled from "styled-components";
import { IconButton } from "./IconButton";
import { CartButton } from "./CartButton";
import { DeleteIcon } from "./Icons";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const Card = styled.article`
    width: 235px;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    position: relative;
    background-color: #f5f5f5;

    @media (max-width: 991px) {
        width: 45%;
    }

    @media (max-width: 640px) {
        width: 100%;
    }
`;


const ImageContainer = styled.div`
    position: relative;
    width: 86%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
`;


const ProductImage = styled.img`
    max-width: 80%;
    max-height: 80%;
    margin-left: 5%;
    margin-top: 12%;
    border-radius: 4px;
`;

const DiscountBadge = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
    color: #fafafa;
    padding: 4px 12px;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
    background-color: #db4444;
`;

const ProductInfo = styled.div`
    padding: 0 16px;
`;

const ProductName = styled.h3`
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    color: #000;
    font-weight: 500;
    margin-top: -5px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -16px;
  margin-bottom: 10px;
  gap: 12px;
`;

const Price = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #db4444;
  font-weight: 500;
`;

const OriginalPrice = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #000;
  text-decoration: line-through;
  opacity: 0.5;
`;

export const WishlistCard = ({
  name,
  price,
  originalPrice,
  discount,
  imageUrl,
  imageAlt,
  onDelete,
  onAddToCart,
}) => {

  const navigate = useNavigate();

  return (
    <Card onClick={() => {navigate("")}}>
      <ImageContainer>
        {discount && <DiscountBadge>{discount}</DiscountBadge>}
        <ProductImage src={imageUrl} alt={imageAlt} />
        <IconButton onClick={onDelete} ariaLabel="Remove from wishlist">
          <DeleteIcon />
        </IconButton>
      </ImageContainer>
      <CartButton onClick={onAddToCart} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <PriceContainer>
          <Price>${price}</Price>
          {originalPrice && <OriginalPrice>${originalPrice}</OriginalPrice>}
        </PriceContainer>
      </ProductInfo>
    </Card>
  );
};
