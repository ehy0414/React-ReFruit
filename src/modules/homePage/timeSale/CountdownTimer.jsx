"use client";
import React from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
  display: flex;
  min-width: 240px;
  align-items: stretch;
  gap: 17px;
  color: #000;
  white-space: nowrap;
  margin-left: -16%;
  width: 400px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const TimeUnit = styled.div`
  min-height: 50px;
  margin-top: 6%;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const UnitLabel = styled.div`
  font-family:
    Poppins,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-weight: 500;
`;

const UnitValue = styled.div`
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 1.28px;
  margin-top: 4px;
`;

const Separator = styled.div`
  align-self: end;
  display: flex;
  min-height: 16px;
  margin-top: 26px;
`;
const SaleTitle = styled.h1`
  color: #000;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 1.44px;
  margin-top: 38px;
  margin-right: 80px;
  `;

export const CountdownTimer = () => {
  return (
    <TimerContainer>
        <SaleTitle>SALE 상품</SaleTitle>
        <TimeUnit>
            <UnitLabel>Days</UnitLabel>
            <UnitValue>03</UnitValue>
        </TimeUnit>
        <Separator />
        <TimeUnit>
            <UnitLabel>Hours</UnitLabel>
            <UnitValue>23</UnitValue>
        </TimeUnit>
        <Separator />
        <TimeUnit>
            <UnitLabel>Minutes</UnitLabel>
            <UnitValue>19</UnitValue>
        </TimeUnit>
        <Separator />
        <TimeUnit>
            <UnitLabel>Seconds</UnitLabel>
            <UnitValue>56</UnitValue>
        </TimeUnit>
    </TimerContainer>
  );
};
