import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const WriteReviewPage = () => {
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName");
    const [orders, setOrders] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [selectedOrderId, setSelectedOrderId] = useState("");
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) return;

        api.get(`/orders?userId=${userId}`)
        .then(res => setOrders(res.data))
        .catch(err => console.error(err));

        api.get(`/reviews?userId=${userId}`)
        .then(res => setReviews(res.data))
        .catch(err => console.error(err));
    }, [userId]);

    const isReviewed = (orderId) => {
        return reviews.some(r => r.orderId === orderId);
    };

    // 이미지 선택 시 미리보기 처리
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
        setImageFile(null);
        setImagePreview(null);
        return;
        }
        setImageFile(file);

        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedOrderId) {
        alert("리뷰를 작성할 상품을 선택하세요.");
        return;
        }
        if (rating === 0) {
        alert("별점을 선택해주세요.");
        return;
        }
        if (content.trim() === "") {
        alert("리뷰 내용을 입력해주세요.");
        return;
        }

        setLoading(true);
        try {
        const order = orders.find(o => o.id === selectedOrderId);

        // 이미지가 있으면 base64 데이터로 넣기 (json-server 제한으로 multipart 안 됨)
        const reviewData = {
            userId,
            orderId: order.id,
            fruitId: order.fruitId,
            title: order.title,
            rating,
            content,
            createdAt: new Date().toISOString(),
            image: imagePreview || null,  // base64 string or null
            name: userName
        };

        await api.post("/reviews", reviewData);

        alert("리뷰가 등록되었습니다!");
        setRating(0);
        setContent("");
        setSelectedOrderId("");
        setImageFile(null);
        setImagePreview(null);
        navigate("/");

        const updatedReviews = await api.get(`/reviews?userId=${userId}`);
        setReviews(updatedReviews.data);
        } catch (error) {
        console.error(error);
        alert("리뷰 등록 중 오류가 발생했습니다.");
        } finally {
        setLoading(false);
        }
    };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>상품 리뷰 작성</Title>

      <Label htmlFor="orderSelect">구매한 상품 선택</Label>
      <Select
        id="orderSelect"
        value={selectedOrderId}
        onChange={e => setSelectedOrderId(e.target.value)}
        disabled={loading}
      >
        <option value="">-- 선택하세요 --</option>
        {orders.map(order => (
          <option
            key={order.id}
            value={order.id}
            disabled={isReviewed(order.id)}
          >
            {order.title} {isReviewed(order.id) ? "(리뷰 작성 완료)" : ""}
          </option>
        ))}
      </Select>

      <Label>별점</Label>
      <Stars>
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            filled={star <= rating}
            onClick={() => setRating(star)}
            type="button"
            aria-label={`${star}점 별점`}
            disabled={loading}
          >
            ★
          </Star>
        ))}
      </Stars>

      <Label htmlFor="content">리뷰 내용</Label>
      <Textarea
        id="content"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="리뷰 내용을 입력해주세요."
        disabled={loading}
      />

      <Label htmlFor="imageUpload">리뷰 사진 첨부</Label>
      <FileInput
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        disabled={loading}
      />
      {imagePreview && <PreviewImage src={imagePreview} alt="리뷰 이미지 미리보기" />}

      <SubmitButton type="submit" disabled={loading}>
        {loading ? "등록 중..." : "리뷰 제출"}
      </SubmitButton>
    </Form>
  );
};

export default WriteReviewPage;

const Form = styled.form`
  max-width: 500px;
  margin: 30px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 25px 30px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  color: #2c3e50;
`;

const Label = styled.label`
  display: block;
  margin: 15px 0 8px 0;
  font-weight: 600;
  color: #34495e;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: #f9f9f9;
  cursor: pointer;

  &:disabled {
    background: #e0e0e0;
    cursor: not-allowed;
  }
`;

const Stars = styled.div`
  margin: 10px 0 15px 0;
`;

const Star = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: ${props => (props.filled ? "#f39c12" : "#ccc")};
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: #f1c40f;
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Textarea = styled.textarea`
  width: 94%;
  height: 110px;
  resize: vertical;
  padding: 12px 14px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-family: 'Noto Sans KR', sans-serif;

  &:disabled {
    background: #f0f0f0;
    cursor: not-allowed;
  }
`;

const FileInput = styled.input`
  margin-top: 8px;
  margin-bottom: 15px;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  display: block;
  margin-top: 10px;
  border-radius: 8px;
  object-fit: contain;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 0;
  margin-top: 20px;
  background-color: #e74c3c;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #c0392b;
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
`;
