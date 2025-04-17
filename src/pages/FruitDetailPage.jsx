"use client";
import * as React from "react";
import styled from "styled-components";
import { FruitImages } from "../modules/fruitDetail/FruitImages";
import { FruitInfo } from "../modules/fruitDetail/FruitInfo";
import Footer from "../components/layout/footer/Footer";

const FruitDetailPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <FruitImages />
        <FruitInfo />
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.main`
    width:100%;
    height:100%;

`;

const ContentWrapper = styled.div`
  gap: 20px;
  display: flex;
  width:80%;
  margin: 0 auto;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export default FruitDetailPage;
