import React from "react";
import styled from "styled-components";

const LoginImageSection = () => {
  return (
    <ImageContainer>
      <CartImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/97f6d8868977ae3fdae27fc5fa8c17f814942251?placeholderIfAbsent=true" alt="Shopping Cart" />
    </ImageContainer>
  );
};

const ImageContainer = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 45px;
    border-radius: 0 4px 4px 0;
    background-color: #cbe4e8;
    margin-left: 8%;
    margin-top: 10px;

    @media (max-width: 991px) {
        padding-top: 50px;
    }

    @media (max-width: 640px) {
        display: none;
    }
`;

const CartImage = styled.img`
  width: 619px;
  height: 506px;

  @media (max-width: 991px) {
    width: 80%;
    height: auto;
  }
`;

export default LoginImageSection;
