import React from "react";
import styled from "styled-components";

const LoginHeader = () => {
  return (
    <HeaderContainer>
      <Title>로그인 화면</Title>
      <Subtitle>아이디 및 비밀번호를 입력해주세요</Subtitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 36px;
  font-weight: 500;
  color: #000;
  letter-spacing: 1.44px;
`;

const Subtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
`;

export default LoginHeader;
