import React from 'react';
import styled from 'styled-components';

const ViewProductCard = ({ product, onClick }) => {
  return (
    <Card onClick={onClick}>
      <ImageWrapper>
        <ProductImage src={product.image} alt={product.title} />
      </ImageWrapper>
      <CardContent>
        <Title>{product.title}</Title>
        <Description>{product.content}</Description>
        <PriceRow>
          <CurrentPrice>{product.currentPrice}원</CurrentPrice>
          <OriginalPrice>{product.originalPrice}원</OriginalPrice>
          <Discount>{product.discount}</Discount>
        </PriceRow>
        <InfoRow>
          <span>리뷰 수: {product.reviewCount}</span>
          <span>판매자: {product.business}</span>
          <span>위치: {product.location}</span>
        </InfoRow>
      </CardContent>
    </Card>
  );
};

// 스타일
const Card = styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  background-color: #fff;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 100%;
  overflow: hidden;
  flex-shrink: 0;
`;

const ProductImage = styled.img`
  width: 150px;
  height: 130px;
  margin-left:14px;
  margin-top:14px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0 0 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0 0 12px;
  line-height: 1.4;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 8px;
`;

const CurrentPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #e53935;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
`;

const Discount = styled.span`
  background-color: #ffeb3b;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
`;

const InfoRow = styled.div`
  font-size: 13px;
  color: #444;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export default ViewProductCard;