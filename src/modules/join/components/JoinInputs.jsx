import React, { useState } from "react";
import styled from "styled-components";
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
  validateName,
} from "../../../utils/validation";

const JoinInputs = ({ formData, onChange }) => {
  const { email, password, passwordCheck, name } = formData;

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    name: false,
  });

  const emailValid = validateEmail(email);
  const passwordValid = validatePassword(password);
  const confirmPasswordValid =
    password === passwordCheck && passwordCheck
      ? { valid: true, message: "비밀번호가 일치합니다." }
      : { valid: false, message: "비밀번호가 일치하지 않습니다." };
  const nameValid = validateName(name);

  return (
    <InputsContainer>
      {/* 이름 */}
      <InputGroup>
        <InputLabel>이름</InputLabel>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onChange}
          onFocus={() => setTouched({ ...touched, name: true })}
          onBlur={() => {
            if (!name) setTouched({ ...touched, name: false });
          }}
        />
        <InputLine />
        {touched.name && (
          <ValidationMessage isValid={nameValid.valid}>
            {nameValid.message}
          </ValidationMessage>
        )}
      </InputGroup>

      {/* 이메일 */}
      <InputGroup>
        <InputLabel>이메일</InputLabel>
        <Input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          onFocus={() => setTouched({ ...touched, email: true })}
          onBlur={() => {
            if (!email) setTouched({ ...touched, email: false });
          }}
        />
        <InputLine />
        {touched.email && (
          <ValidationMessage isValid={emailValid.valid}>
            {emailValid.message}
          </ValidationMessage>
        )}
      </InputGroup>

      {/* 비밀번호 */}
      <InputGroup>
        <InputLabel>비밀번호</InputLabel>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          onFocus={() => setTouched({ ...touched, password: true })}
          onBlur={() => {
            if (!password) setTouched({ ...touched, password: false });
          }}
        />
        <InputLine />
        {touched.password && (
          <ValidationMessage isValid={passwordValid.valid}>
            {passwordValid.message}
          </ValidationMessage>
        )}
      </InputGroup>

      {/* 비밀번호 확인 */}
      <InputGroup>
        <InputLabel>비밀번호 확인</InputLabel>
        <Input
          type="password"
          id="passwordCheck"
          name="passwordCheck"
          value={passwordCheck}
          onChange={onChange}
          onFocus={() => setTouched({ ...touched, confirmPassword: true })}
          onBlur={() => {
            if (!passwordCheck) setTouched({ ...touched, confirmPassword: false });
          }}
        />
        <InputLine />
        {touched.confirmPassword && (
          <ValidationMessage isValid={confirmPasswordValid.valid}>
            {confirmPasswordValid.message}
          </ValidationMessage>
        )}
      </InputGroup>
    </InputsContainer>
  );
};

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
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
`;

const InputLine = styled.div`
  width: 370px;
  height: 1px;
  opacity: 0.2;
  background-color: #000;
  transition: opacity 0.3s ease;
`;

const ValidationMessage = styled.div`
  position: absolute;
  transition: opacity 0.3s ease;
  font-size: 14px;
  margin-top: 55px;
  color: ${(props) => (props.isValid ? "green" : "red")};
`;

export default JoinInputs;
