import styled from "styled-components";
import { FruitQuantity } from "./FruitQuantity";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StarRating } from "../../assets/StarRating";

export const FruitInfo = ({product}) => {
    // 물품 구매 수량
    const [quantity, setQuantity] = useState(1);

    const {id} = useParams();



    const navigate= useNavigate();

    const handleBuyNow = () => {
      const data = {
        id: id,
        title: product.title,
        price: product.currentPrice,
        cnt : quantity,
        img: product.image
      }
        navigate(`/purchase/${id}`, { state: data });
    };

    return (
        <InfoColumn>
        <InfoContainer>
            <ProductTitle>{product.title}</ProductTitle>
              <ReviewsWrapper>
                <StarRating rating={product.averageRating} />
                <span>({product.reviewCount})</span>
              </ReviewsWrapper>


            <ProductPrice>{product.currentPrice}원</ProductPrice>
            <ProductDescription>
              {product.content}
            </ProductDescription>
            <Separator />
            <ActionsContainer>

            <FruitQuantity quantity={quantity} setQuantity={setQuantity}/>

            <BuyButton onClick={handleBuyNow}>구입하기</BuyButton>

            </ActionsContainer>
        </InfoContainer>
        </InfoColumn>
    );
};
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-left: 160px;
  margin-top: -40px;

  @media (max-width: 991px) {
    width: 100%;
    margin: 0;
    padding: 0 16px;
  }
`;

const InfoContainer = styled.article`
  margin-top: 100px;
  font-family: 'Poppins', 'Roboto', sans-serif;
  color: #222;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProductTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const ReviewsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #555;
`;

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 16px;
  color: #e63946;
`;

const ProductDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  margin-top: 20px;
  color: #444;
`;

const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: #ddd;
  margin: 30px 0;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const BuyButton = styled.button`
  background-color: #e63946;
  color: white;
  font-size: 16px;
  padding: 12px 36px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  margin-left: 24%;

  &:hover {
    background-color: #c5283d;
  }

  @media (max-width: 991px) {
    width: 100%;
    padding: 12px;
    font-size: 15px;
  }
`;

