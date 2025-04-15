"use client";
import React from "react";
import styled from "styled-components";
import LoginInputs from "./components/LoginInputs";
import FormHeader from "../components/FormHeader";
import FormActions from "../components/FormActions";


const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormHeader title="로그인 화면"
                  subTitle="이메일 및 패스워드를 입력해주세요"/>
      <LoginInputs />
      <FormActions ButtonText="로그인"/>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-right: 10%;

  @media (max-width: 991px) {
    align-items: center;
  }

  @media (max-width: 640px) {
    width: 100%;
    align-items: center;
  }
`;

export default LoginForm;
