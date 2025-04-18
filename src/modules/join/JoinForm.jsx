"use client";
import React, { useState } from "react";
import styled from "styled-components";
import FormHeader from "../components/FormHeader";
import JoinInputs from "./components/JoinInputs";
import FormActions from "../components/FormActions";
import api from "../../api/axios"; // json-server axios 인스턴스
import { useNavigate } from "react-router-dom";

const JoinForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    name: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const res = await api.post("/users", {
        id: Date.now().toString(),
        email: formData.email,
        password: formData.password,
        name: formData.name
      });
      alert("회원가입이 완료되었습니다!");
      console.log("회원가입 성공", res.data);
      navigate("/login");
    } catch (err) {
      console.error("회원가입 실패", err);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormHeader title="회원가입 화면" subTitle="회원 정보를 입력해주세요" />
      <JoinInputs formData={formData} onChange={handleChange} />
      <FormActions ButtonText="회원가입" />
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

export default JoinForm;
