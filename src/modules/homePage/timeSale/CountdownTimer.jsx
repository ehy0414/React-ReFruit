"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
  display: flex;
  min-width: 240px;
  align-items: stretch;
  gap: 17px;
  color: #000;
  white-space: nowrap;
  margin-left: -240px;
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
  font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 500;
`;

const UnitValue = styled.div`
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
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

const SaleTitle = styled.p`
  color: #000;
  font-family: Hakgyoansim Allimjang OTF B;
  font-size: 32px;
  line-height: 1;
  letter-spacing: 1.44px;
  margin-top: 38px;
  margin-right: 80px;
`;

const CountdownTimer = ({ subTitle, count, targetDate = "2025-05-10T23:59:59", onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const endDate = new Date(targetDate);
    const diff = endDate - now;

    if (diff <= 0) {
      return {
        expired: true,
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const totalSeconds = Math.floor(diff / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);

    return {
      expired: false,
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  }

  useEffect(() => {
    if (!count) return;

    const timer = setInterval(() => {
      const updated = getTimeLeft();
      setTimeLeft(updated);

      if (updated.expired && onExpire) {
        onExpire();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [count, targetDate]);

  return (
    <TimerContainer>
      <SaleTitle>{subTitle}</SaleTitle>
      {count && (
        <>
          <TimeUnit>
            <UnitLabel>Days</UnitLabel>
            <UnitValue>{timeLeft.days}</UnitValue>
          </TimeUnit>
          <Separator />
          <TimeUnit>
            <UnitLabel>Hours</UnitLabel>
            <UnitValue>{timeLeft.hours}</UnitValue>
          </TimeUnit>
          <Separator />
          <TimeUnit>
            <UnitLabel>Minutes</UnitLabel>
            <UnitValue>{timeLeft.minutes}</UnitValue>
          </TimeUnit>
          <Separator />
          <TimeUnit>
            <UnitLabel>Seconds</UnitLabel>
            <UnitValue>{timeLeft.seconds}</UnitValue>
          </TimeUnit>
        </>
      )}
    </TimerContainer>
  );
};


export default CountdownTimer;
