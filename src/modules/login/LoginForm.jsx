"use client";
import React from "react";
import styled from "styled-components";
import LoginHeader from "./components/LoginHeader";
import LoginInputs from "./components/LoginInputs";
import LoginActions from "./components/LoginActions";


const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LoginHeader />
      <LoginInputs />
      <LoginActions />
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

export default LoginForm;
