import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ product, onDelete }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Info>
        <Title>{product.title}</Title>
        <Desc>{product.content}</Desc>
        <PriceRow>
          <CurrentPrice>{product.currentPrice}원</CurrentPrice>
          {product.discount && <Discount>{product.discount}</Discount>}
        </PriceRow>
        <TypeBadge type={product.type}>{product.type.toUpperCase()}</TypeBadge>
        <Business>{product.business} · {product.location}</Business>
        <ButtonRow>
          <EditButton onClick={() => navigate(`/admin/products/edit/${product.id}`)}>수정</EditButton>
          <DeleteButton onClick={() => onDelete(product.id)}>삭제</DeleteButton>
        </ButtonRow>
      </Info>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 30px rgb(0 0 0 / 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 18px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #34495e;
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Desc = styled.p`
  flex: 1;
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

const CurrentPrice = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: #27ae60;
`;

const Discount = styled.span`
  background: #e74c3c;
  color: white;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 13px;
`;

const TypeBadge = styled.span`
  background: ${(props) => (props.type === "sale" ? "#3498db" : "#9b59b6")};
  color: white;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 13px;
  align-self: flex-start;
  margin-bottom: 10px;
`;

const Business = styled.span`
  font-size: 13px;
  color: #95a5a6;
  margin-bottom: 15px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;
`;

const EditButton = styled.button`
  background-color: #e74c3c;
  border: none;
  color: white;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c0392b;
  }
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  border: none;
  color: white;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c0392b;
  }
`;
