import styled from "styled-components";
import { FruitQuantity } from "./FruitQuantity";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
            <ReviewCount>
              사용자 리뷰:
              <CountNumber>({product.reviewCount})</CountNumber>
            </ReviewCount>

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
  align-items: stretch;
  line-height: normal;
  width: 45%;
  margin-left: 160px;
  margin-top: -50px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const InfoContainer = styled.article`
  display: flex;
  margin-top: 100px;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  font-family:
    Poppins,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProductTitle = styled.h1`
  color: #000;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.72px;
  align-self: start;
`;

const RatingSection = styled.div`
  align-self: start;
  display: flex;
  margin-top: 16px;
  align-items: start;
  gap: 16px;
  font-size: 14px;
  justify-content: start;
`;

const ReviewsWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
  color: #000;
  justify-content: start;
`;

const RatingStars = styled.img`
  aspect-ratio: 5;
  object-fit: cover;
  margin-top: -2px;
  object-position: center;
  width: 100px;
  flex-shrink: 0;
`;

const ReviewCount = styled.span`
  opacity: 0.9;
  font-size: 0.9rem;
  margin-top: -5px;
  color: #444;
`;

const CountNumber = styled.span`
  font-weight: bold;
  color: #db4444;
  margin-left: 4px;
`;


const ProductPrice = styled.div`
  color: #000;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 24px;
  line-height: 1;
  letter-spacing: 0.72px;
  align-self: start;
  margin-top: 16px;
`;

const ProductDescription = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 21px;
  margin-top: 24px;
  margin-right: 28px;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const Separator = styled.hr`
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #000;
  margin-top: 23px;
  width: 31rem;
  margin-left: -1px;
  height: 1px;
`;

const ActionsContainer = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  align-items: stretch;
  gap: 17px;
  font-weight: 500;
`;

const BuyButton = styled.button`
  align-self: stretch;
  border-radius: 4px;
  background-color: #db4444;
  padding: 10px 48px;
  gap: 10px;
  font-size: 16px;
  color: #fafafa;
  border: none;
  cursor: pointer;
  margin-left: 12%;
  @media (max-width: 991px) {
    padding: 10px 20px;
  }
`;
