import styled from "styled-components";
import { CartIcon } from "./Icons";

const Button = styled.button`
  width: 100%;
  height: 41px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 0 0 4px 4px;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  background-color: #000;
  border: none;
  cursor: pointer;
`;

export const CartButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <CartIcon />
    <span>바로 구매하기</span>
  </Button>
);
