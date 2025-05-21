import React from "react";
import styled from "styled-components";

const HeaderBar = ({ onAddClick }) => {
  return (
    <Header>
      <Title>상품 관리</Title>
      <AddButton onClick={onAddClick}>+ 상품 추가</AddButton>
    </Header>
  );
};

export default HeaderBar;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #2c3e50;
`;

const AddButton = styled.button`
  padding: 12px 24px;
  background-color: #27ae60;
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #219653;
  }
`;
