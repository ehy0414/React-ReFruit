"use client";
import styled from "styled-components";

const CategoryItem = ({ icon, text }) => {
  return (
    <Article>
      <CategoryIcon src={icon} alt={`${text} category icon`} />
      <CategoryText>{text}</CategoryText>
    </Article>
  );
};
const Article = styled.article`
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.3);
  border-style: solid;
  border-width: 1px;
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  width: 140px;

  @media (max-width: 991px) {
    width: 120px;
    padding: 12px 16px;
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 140px;
  }
`;

const CategoryIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 44px;

  @media (max-width: 991px) {
    width: 38px;
  }
`;

const CategoryText = styled.p`
  margin-top: 12px;
  font-family:
    Poppins,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: #000;
  font-weight: 400;
  text-align: center;
`;


export default CategoryItem;
