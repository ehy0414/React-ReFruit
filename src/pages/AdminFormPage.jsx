import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../api/axios";

const AdminFormPage = ({ isEdit = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    content: "",
    image: "",
    currentPrice: "",
    originalPrice: "",
    discount: "",
    reviewCount: 0,
    userId: "",
    type: "sale",
    business: "",
    location: "",
    category: ""
  });

  useEffect(() => {
    if (isEdit && id) {
      api.get(`/products/${id}`).then(res => setProduct(res.data));
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
  const { name, value } = e.target;

  setProduct(prev => {
    let updated = { ...prev, [name]: value };

    // 가격 관련 필드가 바뀌면 discount 재계산
    if (name === "originalPrice" || name === "currentPrice") {
      const original = parseFloat(name === "originalPrice" ? value : prev.originalPrice);
      const current = parseFloat(name === "currentPrice" ? value : prev.currentPrice);

      if (original > 0 && current >= 0 && current <= original) {
        // 소수점 없이 정수 할인율로 저장 (예: -25%)
        const discountPercent = Math.round(((original - current) / original) * 100);
        updated.discount = `-${discountPercent}%`;
      } else {
        updated.discount = ""; // 계산 불가 시 빈 문자열로 초기화
      }
    }

    return updated;
  });
};


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct(prev => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await api.put(`/products/${id}`, product);
      alert("수정이 완료되었습니다!");
    } else {
      await api.post("/products", product);
      alert("등록이 완료되었습니다!");
    }
    navigate("/admin/products");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>{isEdit ? "상품 수정" : "상품 등록"}</Title>
      
      <Label>제목</Label>
      <Input name="title" value={product.title} onChange={handleChange} placeholder="상품명 입력" required />
      
      <Label>설명</Label>
      <Textarea name="content" value={product.content} onChange={handleChange} placeholder="상품 설명을 입력하세요" required />

      <Row>
        <Column>
          <Label>할인 가격</Label>
          <Input name="currentPrice" value={product.currentPrice} onChange={handleChange} placeholder="₩ 가격" required />
        </Column>
        <Column>
          <Label>원래 가격</Label>
          <Input name="originalPrice" value={product.originalPrice} onChange={handleChange} placeholder="₩ 원래가격" />
        </Column>
      </Row>

      <Row>
        <Column>
          <Label>카테고리</Label>
          <Input name="category" value={product.category} onChange={handleChange} placeholder="예: apple" />
        </Column>
      </Row>

      <Row>
        <Column>
          <Label>사업자명</Label>
          <Input name="business" value={product.business} onChange={handleChange} placeholder="홍길동" />
        </Column>
        <Column>
          <Label>지역</Label>
          <Input name="location" value={product.location} onChange={handleChange} placeholder="서울시 강남구" />
        </Column>
      </Row>

      <Label>판매 유형</Label>
      <Select name="type" value={product.type} onChange={handleChange}>
        <option value="sale">SALE</option>
        <option value="monthly">MONTHLY</option>
      </Select>

      <Label>상품 이미지 업로드</Label>
      <FileInput type="file" accept="image/*" onChange={handleImageChange} />
      {product.image && <Preview src={product.image} alt="상품 이미지" />}

      <SubmitButton type="submit">{isEdit ? "수정하기" : "등록하기"}</SubmitButton>
    </FormContainer>
  );
};

export default AdminFormPage;

const FormContainer = styled.form`
  max-width: 650px;
  margin: 50px auto;
  background: #ffffff;
  padding: 30px 40px;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgb(0 0 0 / 0.12);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #2c3e50;
  font-weight: 700;
  text-align: center;
`;

const Label = styled.label`
  font-weight: 600;
  color: #34495e;
  margin-bottom: 6px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1.8px solid #dcdde1;
  font-size: 16px;
  outline-color: #27ae60;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #27ae60;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  height: 100px;
  border-radius: 12px;
  border: 1.8px solid #dcdde1;
  font-size: 16px;
  resize: none;
  outline-color: #27ae60;
  &:focus {
    border-color: #27ae60;
  }
`;

const Select = styled.select`
  padding: 12px 14px;
  border-radius: 10px;
  border: 1.8px solid #dcdde1;
  font-size: 16px;
  outline-color: #27ae60;
  &:focus {
    border-color: #27ae60;
  }
`;

const FileInput = styled.input`
  margin-top: 8px;
  cursor: pointer;
`;

const Preview = styled.img`
  margin-top: 15px;
  width: 140px;
  height: 140px;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgb(0 0 0 / 0.1);
  align-self: center;
`;

const SubmitButton = styled.button`
  margin-top: 30px;
  padding: 14px 0;
  background-color: #27ae60;
  border: none;
  border-radius: 14px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #219653;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 12px;
`;

const Column = styled.div`
  flex: 1;
`;
