import React, { useState } from "react";
import styled from "styled-components";
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
  validateName,
} from "../../../utils/validation";

const JoinInputs = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);
  const confirmValidation = validatePasswordConfirm(password, confirmPassword);
  const nameValidation = validateName(name);

  return (
    <InputsContainer>
      <InputGroup>
        <InputLabel>이메일</InputLabel>
        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputLine />
        <ValidationText valid={emailValidation.valid}>{emailValidation.message}</ValidationText>
      </InputGroup>

      <InputGroup>
        <InputLabel>비밀번호</InputLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <InputLine />
        <ValidationText valid={passwordValidation.valid}>{passwordValidation.message}</ValidationText>
      </InputGroup>

      <InputGroup>
        <InputLabel>비밀번호 확인</InputLabel>
        <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <InputLine />
        <ValidationText valid={confirmValidation.valid}>{confirmValidation.message}</ValidationText>
      </InputGroup>

      <InputGroup>
        <InputLabel>이름</InputLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <InputLine />
        <ValidationText valid={nameValidation.valid}>{nameValidation.message}</ValidationText>
      </InputGroup>
    </InputsContainer>
  );
};


const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

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
  height: 1px;
  opacity: 0.2;
  background-color: #000;
  transition: opacity 0.3s ease;

  @media (max-width: 991px) {
    width: 80%;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const ValidationText = styled.p`
  font-size: 12px;
  margin-top: 5px;
  color: ${({ valid }) => (valid ? "green" : "red")};
`;

export default JoinInputs;
