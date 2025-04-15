"use client";
import React from "react";
import styled from "styled-components";
import FormHeader from "../../components/FormHeader";
import JoinInputs from "./components/JoinInputs";
import FormActions from "../../components/FormActions";


const JoinForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormHeader title="회원가입 화면"
                  subTitle="회원 정보를 입력해주세요"/>
      <JoinInputs />
      <FormActions ButtonText="회원가입"/>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-right: 8%;

  @media (max-width: 991px) {
    align-items: center;
  }

  @media (max-width: 640px) {
    width: 100%;
    align-items: center;
  }
`;

export default JoinForm;
