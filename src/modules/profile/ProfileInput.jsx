import React from "react";
import styled from "styled-components";

const ProfileInput = ({ label, value, onChange }) => (
  <>
    <Label>{label}</Label>
    <Input type="text" value={value} onChange={onChange} placeholder="이름을 입력하세요" />
  </>
);

export default ProfileInput;

const Label = styled.label`
  display: block;
  margin: 20px 0 8px;
  font-weight: 600;
  color: #555;
  text-align: left;
`;

const Input = styled.input`
  width: 92%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 15px;
`;
