import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Overlay,
  NavigationContainer,
  DotWrapper,
  Dot,
} from "./BannerComponents";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";

const banners = [
  {
    title: "1번째 농산물가게",
    image: `${image1}`,
    link: "/store-1",
  },
  {
    title: "2번째 농산물가게",
    image: `${image2}`,
    link: "/store-2",
  },
  {
    title: "3번째 농산물가게",
    image: `${image3}`,
    link: "/store-3",
  },
  // {
  //   title: "4번째 농산물가게",
  //   image: "https://cdn.builder.io/api/v1/image/assets/TEMP/sample4",
  //   link: "/store-4",
  // },
  // {
  //   title: "5번째 농산물가게",
  //   image: "https://cdn.builder.io/api/v1/image/assets/TEMP/sample5",
  //   link: "/store-5",
  // },
];

const PromotionalBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const handleDotClick = (index) => {
    if (index === currentIndex) return;

    setVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setVisible(true);
    }, 300);
  };

  const handleClickBanner = () => {
    navigate(banners[currentIndex].link);
  };

  return (
    <BannerContainer onClick={handleClickBanner}>
      <ImageWrapper>
        {banners.map((banner, index) => (
          <FadeImage
            key={index}
            src={banner.image}
            alt={banner.title}
            style={{
              opacity: index === currentIndex && visible ? 1 : 0,
              zIndex: index === currentIndex ? 2 : 1,
            }}
          />
        ))}
      </ImageWrapper>

      <Overlay />

      {/* <ContentWrapper>
        <HeaderSection>
          <ProductTitle>{banners[currentIndex].title}</ProductTitle>
        </HeaderSection>
      </ContentWrapper> */}

      <NavigationContainer>
        {banners.map((_, index) => (
          <DotWrapper
            key={index}
            onClick={(e) => {
              e.stopPropagation(); // 도트 클릭 시 배너 클릭 방지
              handleDotClick(index);
            }}
          >
            <Dot active={index === currentIndex} />
          </DotWrapper>
        ))}
      </NavigationContainer>
    </BannerContainer>
  );
};

export default PromotionalBanner;

const BannerContainer = styled.div`
  position: relative;
  margin: 0 auto;
  height: 344px;
  width: 80%;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;

  @media (max-width: 991px) {
    height: auto;
    padding-bottom: 60px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const FadeImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: auto;
  transition: opacity 0.5s ease-in-out;
`;

