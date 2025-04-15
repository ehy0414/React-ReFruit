import React from "react";
import styled from "styled-components";

const FormHeader = ({title, subTitle}) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 36px;
  font-weight: 500;
  color: #000;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
`;

export default FormHeader;
