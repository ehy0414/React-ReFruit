import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 15;

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("userId");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await api.get("/reviews?_sort=createdAt&_order=desc");
        setReviews(res.data);
      } catch (err) {
        console.error("리뷰 불러오기 실패", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleWriteClick = () => {
    if (isLoggedIn) navigate("/review/write");
  };

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedReviews = reviews.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);

  if (loading) return <Message>리뷰 불러오는 중...</Message>;
  if (reviews.length === 0) return <Message>아직 등록된 리뷰가 없습니다.</Message>;

  return (
    <Container>
      <Header>
        <Title>전체 리뷰 모아보기</Title>
        <WriteButton onClick={handleWriteClick} disabled={!isLoggedIn}>
          리뷰 작성하기
        </WriteButton>
      </Header>

      {paginatedReviews.map((review) => (
        <ReviewRowCard key={review.id}>
          {review.image && <Image src={review.image} alt="리뷰 이미지" />}
          <TextContent>
            <ProductName>{review.title}</ProductName>
            <Stars>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} filled={i < review.rating}>★</Star>
              ))}
            </Stars>
            <Content>{review.content}</Content>
            <Meta>
              작성자: <strong>{review.name}</strong> ·{" "}
              {new Date(review.createdAt).toLocaleDateString()}
            </Meta>
          </TextContent>
        </ReviewRowCard>
      ))}

      <Pagination>
        <PageButton onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          이전
        </PageButton>
        <PageInfo>{currentPage} / {totalPages}</PageInfo>
        <PageButton onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          다음
        </PageButton>
      </Pagination>
    </Container>
  );
};

export default ReviewsPage;


const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 0 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #2c3e50;
`;

const WriteButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#ccc" : "#e74c3c")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s ease;

  &:hover {
    background: ${({ disabled }) => (disabled ? "#ccc" : "#c0392b")};
  }
`;

const ReviewRowCard = styled.div`
  display: flex;
  gap: 20px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  margin-bottom: 24px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 200px;
  height: 148px;
  object-fit: cover;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
`;

const TextContent = styled.div`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0;
`;

const Stars = styled.div`
  margin: 5px 0;
`;

const Star = styled.span`
  color: ${props => (props.filled ? "#f1c40f" : "#ccc")};
  font-size: 1.2rem;
`;

const Content = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin: 10px 0;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Meta = styled.div`
  font-size: 0.85rem;
  color: #888;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 30px;
`;

const PageButton = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.div`
  font-size: 0.95rem;
  color: #333;
`;

const Message = styled.p`
  text-align: center;
  margin-top: 100px;
  font-size: 1.2rem;
  color: #666;
`;

