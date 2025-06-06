"use client";
import styled from "styled-components";
import { IconButton } from "./IconButton";
import { CartButton } from "./CartButton";
import { DeleteIcon } from "./Icons";
import { useNavigate } from "react-router-dom";

const Card = styled.article`
    width: 235px;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    position: relative;
    background-color: #f5f5f5;
    cursor: pointer;

    @media (max-width: 991px) {
        width: 45%;
    }

    @media (max-width: 640px) {
        width: 100%;
    }
`;


const ImageContainer = styled.div`
    position: relative;
    width: 235px;
    height: 200px;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  id,
  name,
  price,
  originalPrice,
  discount,
  imageUrl,
  imageAlt,
  onDelete
}) => {

  const navigate = useNavigate();

  const handdleBuy = (e) => {
    e.stopPropagation();
    const data = {
      id,
      title: name,
      price,
      cnt: 1,
      img: imageUrl
    };
    navigate(`/purchase/${id}`, {state: data})
  };

  return (
    <Card onClick={(e) => {
        e.stopPropagation();
        navigate(`/fruit/detail/${id}`)}}>
      <ImageContainer>
        {discount && <DiscountBadge>{discount}</DiscountBadge>}
        <ProductImage src={imageUrl} alt={imageAlt} />
        <IconButton onClick={(e) => onDelete(e)} ariaLabel="Remove from wishlist">
          <DeleteIcon />
        </IconButton>
      </ImageContainer>
      <CartButton onClick={handdleBuy} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <PriceContainer>
          <Price>{price}원</Price>
          {originalPrice && <OriginalPrice>{originalPrice}원</OriginalPrice>}
        </PriceContainer>
      </ProductInfo>
    </Card>
  );
};
