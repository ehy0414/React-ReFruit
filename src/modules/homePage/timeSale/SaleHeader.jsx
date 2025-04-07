import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  height: 103px;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  margin-bottom: 10px;
`;

const TitleWrapper = styled.div`
  align-self: start;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: start;
  margin-bottom: -20px;
`;

const IndicatorContainer = styled.div`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  width: 20px;
`;

const RedIndicator = styled.div`
  border-radius: 4px;
  background-color: #db4444;
  display: flex;
  flex-shrink: 0;
  height: 30px;
`;

const TodayProduct = styled.h2`
  color: #db4444;
  font-family:
    Poppins,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
`;



export const SaleHeader = () => {
  return (
    <HeaderContainer>
      <TitleWrapper>
        <IndicatorContainer>
          <RedIndicator />
        </IndicatorContainer>
        <TodayProduct>오늘의 상품</TodayProduct>
      </TitleWrapper>
    </HeaderContainer>
  );
};
