"use client";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ViewAllProductsButton({path}) {
  const navigate = useNavigate();
  return (
    <ButtonWrapper>
      <ActionButton onClick={() => {navigate(`${path}`)}}>View All Products</ActionButton>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1%;
`;

const ActionButton = styled.button`
  color: #fafafa;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  gap: 10px;
  border-radius: 4px;
  background-color: #db4444;
  width: 164px;
  height: 48px;
  cursor: pointer;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: 2px solid #db4444;
    outline-offset: 2px;
  }
`;

export default ViewAllProductsButton;
