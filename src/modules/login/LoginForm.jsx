"use client";
import React, { useState } from "react";
import styled from "styled-components";
import LoginInputs from "./components/LoginInputs";
import FormHeader from "../components/FormHeader";
import FormActions from "../components/FormActions";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");  // 이메일 상태 관리
  const [password, setPassword] = useState("");  // 비밀번호 상태 관리
  const [error, setError] = useState("");  // 로그인 오류 상태

  const navigate = useNavigate();

  // 로그인 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get("/users");
      const users = response.data;

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // ✅ 로그인 정보 저장
        localStorage.setItem("userId", user.id);
        localStorage.setItem("userName", user.name);
        localStorage.setItem("userEmail", user.email);

        alert("로그인 성공!");
        navigate("/");
        window.location.reload();
      } else {
        alert("이메일 또는 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormHeader title="로그인 화면" subTitle="이메일 및 패스워드를 입력해주세요" />
      <LoginInputs
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormActions ButtonText="로그인" />
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-right: 10%;

  @media (max-width: 991px) {
    align-items: center;
  }

  @media (max-width: 640px) {
    width: 100%;
    align-items: center;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
`;

export default LoginForm;
