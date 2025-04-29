"use client";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import appleIcon from "./images/apple.png";
import grapeIcon from "./images/grape.png";
import kiwiIcon from "./images/kiwi.png";
import mangoIcon from "./images/mango.png";
import watermelonIcon from "./images/watermelon.png";
import orangeIcon from "./images/orange.png";

const CategoryList = () => {
  const categories = [
    { icon: appleIcon, 
      text: "사과",
      path: "/refruit/apple" },
    { icon: orangeIcon, 
      text: "오렌지",
      path: "/refruit/orange" },
    { icon: grapeIcon, 
      text: "포도",
      path: "/refruit/grape" },
    { icon: kiwiIcon, 
      text: "키위",
      path: "/refruit/kiwi" },
    { icon: watermelonIcon, 
      text: "수박",
      path: "/refruit/watermelon" },
    { icon: mangoIcon, 
      text: "망고",
      path: "/refruit/mango" }
  ];

  return (
    <Section>
      {categories.map((category, index) => (
        <CategoryItem key={index} src={category.icon} text={category.text} path={category.path}/>
      ))}
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: start;
  gap: 30px;
  font-family:
    Poppins,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: #000;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  justify-content: start;
  flex-wrap: wrap;
  margin-left: 10%;
  margin-top: -3%;
  margin-bottom: 5%;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default CategoryList;
