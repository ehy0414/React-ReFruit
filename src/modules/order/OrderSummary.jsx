"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import OrderModal from "./components/OrderModal";
import api from "../../api/axios";

const OrderSummary = ({ fruitInfo, orderInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const quantity = fruitInfo?.cnt ?? 0;
  const price = fruitInfo?.price ?? 0;
  const totalPrice = quantity * price;

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    setUserName(localStorage.getItem("userName"));
    setUserEmail(localStorage.getItem("userEmail"));
  }, []);

  const handleOrder = async () => {
    const { name, address, detailAddress, phone } = orderInfo;
  
    // 입력값 유효성 검사
    if (!name || !address || !detailAddress || !phone) {
      alert("모두 입력해주세요.");
      return; // 주문 중단
    }
  
    try {
      await api.post("/orders", {
        id: Date.now().toString(),
        fruitId: fruitInfo.id,
        title: fruitInfo.title,
        cnt: fruitInfo.cnt,
        price: fruitInfo.price,
        userId,
        userName,
        userEmail,
        orderName: name,
        address,
        detailAddress,
        phone
      });
  
      setIsModalOpen(true);
    } catch (err) {
      console.error("주문 실패", err);
      alert("주문 중 오류가 발생했습니다.");
    }
  };
  

  
  return (
    <SummarySection>
      <ImageContainer>
        <ProductImage src={fruitInfo.img} alt="Product" />
      </ImageContainer>

      <OrderInfo>
              <InfoBlock>
                  <Label>수량</Label>
                  <Value>{fruitInfo.cnt}개</Value>
              </InfoBlock>
              <Divider />
              <InfoBlock>
                  <Label>총 가격</Label>
                  <Value>{totalPrice.toLocaleString()}원</Value>
              </InfoBlock>
          </OrderInfo>

      <ButtonContainer>
        <OrderButton onClick={handleOrder}>주문하기</OrderButton>
      </ButtonContainer>

      {isModalOpen && (
        <OrderModal price={totalPrice} />
      )}
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
    width: 80%;
    height: 80%;
    object-fit: cover;
    border-radius: 4px;
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
