import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BannerContainer,
  ContentWrapper,
  HeaderSection,
  BrandLogo,
  ProductTitle,
  PromotionalText,
  CTASection,
  CTAContent,
  CTAText,
  CTAUnderline,
  ProductImage,
  NavigationContainer,
  Dot,
} from "./BannerComponents";
import { ArrowIcon } from "./Icons";
import img1 from "./assets/image.png";

const banners = [
  {
    title: "어디 농산물가게",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1b3390352df2040c37b7f8593cd899b68d3ad51",
    link: "/iphone-14",
  },
  {
    title: "2번째 농산물가게",
    image: img1,
    link: "/iphone-14-plus",
  },
  {
    title: "3번째 농산물가게",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/sample3",
    link: "/iphone-14-pro",
  },
  {
    title: "4번째 농산물가게",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/sample4",
    link: "/iphone-14-pro-max",
  },
  {
    title: "5번째 농산물가게",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/sample5",
    link: "/iphone-accessories",
  },
];

const PromotionalBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleImageClick = () => {
    navigate(banners[currentIndex].link);
  };

  return (
    <BannerContainer>
      <ContentWrapper>
        <HeaderSection>
          <ProductTitle>{banners[currentIndex].title}</ProductTitle>
        </HeaderSection>

        <PromotionalText>Up to 10% off Voucher</PromotionalText>

        <CTASection>
          <CTAContent>
            <CTAText>Shop Now</CTAText>
            <CTAUnderline />
          </CTAContent>
          <ArrowIcon />
        </CTASection>
      </ContentWrapper>

      <ProductImage
        src={banners[currentIndex].image}
        alt={`Banner ${currentIndex + 1}`}
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      />

      <NavigationContainer>
        {banners.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </NavigationContainer>
    </BannerContainer>
  );
};

export default PromotionalBanner;
