import React from "react";
import styled from "styled-components";

const ProfileImageUpload = ({ preview, onImageChange }) => {
  return (
    <ImageContainer>
      <ImagePreview src={preview} alt="프로필 이미지" /><br/>
      <CustomFileLabel htmlFor="file">이미지 변경</CustomFileLabel>
      <HiddenFileInput id="file" type="file" accept="image/*" onChange={onImageChange} />
    </ImageContainer>
  );
};

export default ProfileImageUpload;

const ImageContainer = styled.div`
  margin-bottom: 25px;
`;

const ImagePreview = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const CustomFileLabel = styled.label`
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  color: red;
  cursor: pointer;
  text-decoration: underline;
`;
