import React from "react";
import styled from "styled-components";
import ProfileImageUpload from "./ProfileImageUpload";
import ProfileInput from "./ProfileInput";

const ProfileCard = ({ name, setName, preview, onImageChange, onSave }) => {
  return (
    <Wrapper>
      <Card>
        <Title>내 프로필</Title>
        <ProfileImageUpload preview={preview} onImageChange={onImageChange} />
        <ProfileInput label="이름" value={name} onChange={(e) => setName(e.target.value)} />
        <SaveButton onClick={onSave}>저장하기</SaveButton>
      </Card>
    </Wrapper>
  );
};

export default ProfileCard;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  background-color: #f8f9fa;
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 30px 25px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #2d8cf0;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #1c6ed6;
  }
`;
