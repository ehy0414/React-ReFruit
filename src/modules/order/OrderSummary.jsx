"use client";
import * as React from "react";
import styled from "styled-components";

const OrderSummary = ({fruitInfo}) => {
    return (
      <SummarySection>
        <ImageContainer>
          <ProductImage src="https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/407ba89d6146db5c8d0deee3f46c6d8b7d667fe8?placeholderIfAbsent=true" alt="Product" />
        </ImageContainer>

        <OrderInfo>
                <InfoBlock>
                    <Label>수량</Label>
                    <Value>{fruitInfo.cnt}개</Value>
                </InfoBlock>
                <Divider />
                <InfoBlock>
                    <Label>총 가격</Label>
                    <Value>{fruitInfo.price}원</Value>
                </InfoBlock>
            </OrderInfo>

        <ButtonContainer>
            <OrderButton>Place Order</OrderButton>
        </ButtonContainer>
      </SummarySection>
    );
  };
  

const SummarySection = styled.section`
  display: flex;
  margin-top: 106px;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ImageContainer = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #f5f5f5;
  height: 400px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  aspect-ratio: 1;
  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const ProductImage = styled.img`
  aspect-ratio: 1.57;
  object-fit: contain;
  object-position: center;
  width: 214px;
`;

const ButtonContainer = styled.div`
  align-self: center;
  margin-top: 80px;
  font-family:
    Poppins,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: #fafafa;
  font-weight: 500;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const OrderInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 16px 24px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-top: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.span`
  font-size: 14px;
  color: #888;
  margin-bottom: 4px;
`;

const Value = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #222;
`;

const Divider = styled.div`
  width: 1px;
  height: 32px;
  background-color: #ddd;

  @media (max-width: 991px) {
    width: 60%;
    height: 1px;
  }
`;



const OrderButton = styled.button`
  align-self: stretch;
  border-radius: 4px;
  background-color: #db4444;
  padding: 16px 48px;
  border: none;
  color: #fafafa;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  margin-top: -50px;

  &:hover {
    background-color: #c93d3d;
  }

  @media (max-width: 991px) {
    padding: 16px 20px;
  }
`;

export default OrderSummary;
