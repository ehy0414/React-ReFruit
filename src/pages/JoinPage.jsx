"use client";
import React from "react";
import styled from "styled-components";
import FormImageSection from "../modules/components/FormImageSection";
import JoinForm from "../modules/join/JoinForm";
import Footer from "../components/layout/footer/Footer";


const JoinPage = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <PageContainer>
        <FormImageSection />
        <JoinForm />
      </PageContainer>
      <Footer />
    </>
  );
};

const PageContainer = styled.main`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 991px) {
    max-width: 991px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    max-width: 640px;
    padding: 0 10px;
  }
`;

export default JoinPage;
