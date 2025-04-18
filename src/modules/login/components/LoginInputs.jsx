import React from "react";
import styled from "styled-components";

const LoginInputs = ({ email, password, setEmail, setPassword }) => {
  return (
    <InputsContainer>
      <InputGroup>
        <InputLabel htmlFor="email">이메일</InputLabel>
        <Input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // 이메일 값 업데이트
          required
        />
        <InputLine />
      </InputGroup>
      <InputGroup>
        <InputLabel htmlFor="password">비밀번호</InputLabel>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // 비밀번호 값 업데이트
          required
        />
        <InputLine />
      </InputGroup>
    </InputsContainer>
  );
};

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:focus-within label {
    opacity: 1;
  }
`;

const InputLabel = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  opacity: 0.4;
  transition: opacity 0.3s ease;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  width: 100%;

  &:focus + div {
    opacity: 1;
  }
`;

const InputLine = styled.div`
  width: 370px;
  height: 1.2px;
  opacity: 0.3;
  background-color: #000;
  transition: opacity 0.3s ease;

  @media (max-width: 991px) {
    width: 80%;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export default LoginInputs;
