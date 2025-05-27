import React from "react";
import styled from "styled-components";
import logo from "./images/loginlogo.jpg";

const FormImageSection = () => {
  return (
    <ImageContainer>
      <CartImage src={logo} alt="Shopping Cart" />
    </ImageContainer>
  );
};

const ImageContainer = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 45px;
    border-radius: 0 4px 4px 0;
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
  height: 606px;
  object-fit: cover;

  @media (max-width: 991px) {
    width: 80%;
    height: auto;
  }
`;

export default FormImageSection;
