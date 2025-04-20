import React from "react";
import styled from "styled-components";
import qrImage from "../assets/qr.png";

const OrderModal = ({ price, onClose }) => {
  return (
    <ModalOverlay>
      <ModalBox>
        <>
            <Title>주문해주셔서 감사합니다!</Title>
            <Subtitle>주문하신 가격은 {price}원입니다. 송금해주세요!</Subtitle>
            <QRImage src={qrImage} alt="QR code" />
        </><br/>
        
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalBox>
    </ModalOverlay>
  );
};

export default OrderModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const QRImage = styled.img`
  width: 250px;
  height: auto;
  margin:0 auto;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background-color: #db4444;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #c93d3d;
  }
`;
