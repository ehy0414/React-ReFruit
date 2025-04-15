"use client";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategoryItem = ({ icon, text, path }) => {
  const navigate = useNavigate();
  return (
    <Article onClick={() => {navigate(`${path}`)}}>
      <CategoryIcon src={icon} alt={`${text} category icon`} className="category-icon" />
      <p className="category-text">{text}</p>
    </Article>
  );
};

const Article = styled.article`
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.3);
  border-style: solid;
  border-width: 1px;
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  width: 140px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #db4444;
    cursor: pointer;
  }

  &:hover .category-text {
    color: white;
  }

  &:hover .category-icon {
    filter: brightness(0) invert(1); /* 흰색 느낌 나게 */
  }

  .category-text {
    margin-top: 12px;
    font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 14px;
    color: #000;
    font-weight: 400;
    text-align: center;
    transition: color 0.3s ease;
  }
`;

const CategoryIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 44px;
  margin-top: 12px;
  transition: filter 0.3s ease;

  @media (max-width: 991px) {
    width: 38px;
  }
`;


export default CategoryItem;
