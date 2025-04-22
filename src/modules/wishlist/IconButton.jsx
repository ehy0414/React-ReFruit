import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 12px;
  right: 6px;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const IconButton = ({ children, onClick, ariaLabel }) => (
  <StyledButton onClick={onClick} aria-label={ariaLabel}>
    {children}
  </StyledButton>
);
