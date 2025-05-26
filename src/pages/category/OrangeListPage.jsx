import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import ViewProductCard from "../../modules/components/ViewProductCard";

const OrangeListPage = () => {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const res = await api.get("/products?category=orange");
      setProducts(res.data);
    } catch (error) {
      console.error("상품 불러오기 오류", error);
    }
  };

  const getReviews = async () => {
    try {
      const res = await api.get("/reviews");
      setReviews(res.data);
    } catch (error) {
      console.error("리뷰 불러오기 오류", error);
    }
  };

  useEffect(() => {
    getProducts();
    getReviews();
  }, []);

  const handleClick = (product) => {
    navigate(`/fruit/detail/${product.id}`);
  };

  // 해당 상품의 리뷰 수와 평균 평점 계산
  const getReviewStats = (productId) => {
    const productReviews = reviews.filter(
      (review) => review.fruitId === String(productId)
    );
    const count = productReviews.length;

    const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = count > 0 ? (totalRating / count).toFixed(1) : "0.0";

    return { count, averageRating };
  };

  return (
    <Container>
      <Title>오렌지 목록</Title>
      {products.map((product) => {
        const { count, averageRating } = getReviewStats(product.id);

        return (
          <ViewProductCard
            key={product.id}
            product={{
              ...product,
              reviewCount: count,          // 업데이트된 리뷰 수
              averageRating: averageRating // 평균 별점
            }}
            onClick={() => handleClick(product)}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: Hakgyoansim Allimjang OTF R;
  letter-spacing: 1px;
  font-size: 20px;
  color: #000;
  margin: 0;
`;

export default OrangeListPage;
