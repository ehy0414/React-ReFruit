import styled from "styled-components";
import { FruitQuantity } from "./FruitQuantity";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const FruitInfo = () => {
    // 물품 구매 수량
    const [quantity, setQuantity] = useState(1);

    const params = useParams();

    // 임시 데이터
    const title = "Havic HV G-92 Gamepad";
    const price = 192.00;

    const navigate= useNavigate();

    const handleBuyNow = () => {
        const data = {
            id: params,
            title: title,
            price: price,
            cnt : quantity
        }
        navigate("/purchase", { state: data });
    };

    return (
        <InfoColumn>
        <InfoContainer>
            <ProductTitle>Havic HV G-92 Gamepad</ProductTitle>
            <RatingSection>
            <ReviewsWrapper>
                <RatingStars src="https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/55500910f7fda67e937673122aa77ab99e4599d2?placeholderIfAbsent=true" alt="Rating stars" />
                <ReviewCount>(150 Reviews)</ReviewCount>
            </ReviewsWrapper>
            <StockInfo>
                <Divider />
                <StockStatus>In Stock</StockStatus>
            </StockInfo>
            </RatingSection>
            <ProductPrice>$192.00</ProductPrice>
            <ProductDescription>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
            </ProductDescription>
            <Separator />
            <ActionsContainer>

            <FruitQuantity quantity={quantity} setQuantity={setQuantity}/>

            <BuyButton onClick={handleBuyNow}>Buy Now</BuyButton>

            <WishlistButton src="https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/39cad115df8f8fac9803aafdeef0dc52c6de105b?placeholderIfAbsent=true" alt="Add to wishlist" />
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
  margin-left: 180px;
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
  object-fit: contain;
  object-position: center;
  width: 100px;
  flex-shrink: 0;
`;

const ReviewCount = styled.span`
  opacity: 0.5;
`;

const StockInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #0f6;
  justify-content: start;
`;

const Divider = styled.div`
  opacity: 0.5;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #000;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  width: 0px;
  flex-shrink: 0;
  height: 16px;
`;

const StockStatus = styled.span`
  opacity: 0.6;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
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
  @media (max-width: 991px) {
    padding: 10px 20px;
  }
`;

const WishlistButton = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 42px;
  border-radius: 4px;
  align-self: start;
  flex-shrink: 0;
  cursor: pointer;
`;
