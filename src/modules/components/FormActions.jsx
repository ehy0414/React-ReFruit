import React from "react";
import styled from "styled-components";

const FormActions = ({ButtonText}) => {
  return (
    <ActionsContainer>
      <LoginButton type="submit">{ButtonText}</LoginButton>
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

export default FormActions;
