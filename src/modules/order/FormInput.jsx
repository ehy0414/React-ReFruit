"use client";
import * as React from "react";
import styled from "styled-components";

const FormInput = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <InputWrapper>
      <InputLabel active={isFocused}>
        {label}
      </InputLabel>
      <InputField
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  margin-top: ${(props) => (props.isFirst ? "0" : "32px")};
  line-height: 24px;
`;

const InputLabel = styled.label`
  font-family:
    Poppins,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  opacity: ${(props) => (props.active ? 1 : 0.4)};
  transition: opacity 0.2s ease-in-out;
`;

const OptionalText = styled.span`
  opacity: 0.4;
`;

const InputField = styled.input`
  border-radius: 4px;
  background-color: #f5f5f5;
  display: flex;
  min-height: 50px;
  margin-top: 8px;
  width: 100%;
  border: none;
  padding: 0 16px;
  font-family:
    Poppins,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(219, 68, 68, 0.2);
  }
`;

export default FormInput;
