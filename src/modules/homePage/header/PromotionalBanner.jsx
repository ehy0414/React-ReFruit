"use client";
import React from "react";
import { ArrowIcon, NavigationDots } from "./Icons";
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
} from "./BannerComponents";

const PromotionalBanner = () => {
  return (
    <BannerContainer>
      <ContentWrapper>
        <HeaderSection>
          <BrandLogo src="https://cdn.builder.io/api/v1/image/assets/TEMP/01c39aacdef767b9b9f256e5d1401afe0fc3812e" alt="Apple logo" />
          <ProductTitle>iPhone 14 Series</ProductTitle>
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

      <ProductImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1b3390352df2040c37b7f8593cd899b68d3ad51" alt="iPhone 14" />

      <NavigationContainer>
        <NavigationDots />
      </NavigationContainer>
    </BannerContainer>
  );
};

export default PromotionalBanner;
