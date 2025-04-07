"use client";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const categories = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/980549b8142fb4c2077d1589a566fbbd456e6ff9?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c", text: "사과" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad6ec640e35a0a86c223a6073cd7dc1a51d64e2d?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c", text: "오렌지" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/773eab8b4795462c8a5d755c3b00663cda6d6f8f?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c", text: "포도" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/773eab8b4795462c8a5d755c3b00663cda6d6f8f?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c", text: "포도" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/773eab8b4795462c8a5d755c3b00663cda6d6f8f?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c", text: "포도" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/773eab8b4795462c8a5d755c3b00663cda6d6f8f?placeholderIfAbsent=true&apiKey=7adddd5587f24b91884c2915be4df62c", text: "포도" }
  ];

  return (
    <Section>
      {categories.map((category, index) => (
        <CategoryItem key={index} icon={category.icon} text={category.text} />
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
