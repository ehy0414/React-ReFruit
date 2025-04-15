import React from "react";
import styled from "styled-components";

const LoginActions = () => {
  return (
    <ActionsContainer>
      <LoginButton type="submit">Log In</LoginButton>
    </ActionsContainer>
  );
};

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 87px;
  margin: 0 auto;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LoginButton = styled.button`
  padding: 16px 48px;
  color: #fafafa;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  background-color: #db4444;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;

const ForgotPassword = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #db4444;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

export default LoginActions;
