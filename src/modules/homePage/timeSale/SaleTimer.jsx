"use client";
import React from "react";
import styled from "styled-components";
import { HeaderTitle } from "../components/HeaderTitle";
import CountdownTimer from "./CountdownTimer";

const SaleContainer = styled.section`
  display: flex;
  align-items: end;
  justify-content: start;
  flex-wrap: wrap;
  margin-left: 11%;
  margin-top: 5%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  min-width: 240px;
  align-items: end;
  gap: 40px 87px;
  justify-content: start;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SaleTimer = ({title, subTitle, count}) => {
  return (
    <SaleContainer>
      <ContentWrapper>
        <HeaderTitle title={title}/>
      </ContentWrapper>
      <CountdownTimer subTitle={subTitle} count={count}/>
    </SaleContainer>
  );
};

export default SaleTimer;
