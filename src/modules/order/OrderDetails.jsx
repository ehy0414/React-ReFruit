"use client";
import * as React from "react";
import styled from "styled-components";
import FormInput from "./FormInput";

const OrderDetails = ({fruitInfo}) => {
  return (
    <FormSection>
      <FormTitle>{fruitInfo.title}</FormTitle>
      <FormContainer>
        <FormFields>
          <FormInput label="주문자 이름 작성" />
          <FormInput label="배달지 작성" />
          <FormInput label="상세주소" />
          <FormInput label="휴대폰 번호" />
        </FormFields>
      </FormContainer>
    </FormSection>
  );
};

const FormSection = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: stretch;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const FormTitle = styled.h1`
  align-self: start;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 36px;
  color: #000;
  font-weight: 500;
  letter-spacing: 1.44px;
  line-height: 1;
`;

const FormContainer = styled.form`
  margin-top: 1px;
  font-family:
    Poppins,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: #000000;
  font-weight: 400;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const FormFields = styled.div`
  max-width: 100%;
  width: 470px;
`;

export default OrderDetails;
