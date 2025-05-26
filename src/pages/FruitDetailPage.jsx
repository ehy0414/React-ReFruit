import styled from "styled-components";
import { FruitImages } from "../modules/fruitDetail/FruitImages";
import { FruitInfo } from "../modules/fruitDetail/FruitInfo";
import Footer from "../components/layout/footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

const FruitDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const getProduct = async () => {
    try {
      const [productRes, reviewsRes] = await Promise.all([
        api.get(`/products?id=${id}`),
        api.get(`/reviews`)
      ]);

      const productData = productRes.data[0];
      const reviews = reviewsRes.data.filter(
        (review) => review.fruitId === id
      );

      const reviewCount = reviews.length;
      const averageRating =
        reviewCount === 0
          ? 0
          : (
              reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount
            ).toFixed(1);

      setProduct({
        ...productData,
        reviewCount,
        averageRating
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <Container>
      <ContentWrapper>
        {product ? (
          <>
            <FruitImages image={product.image} />
            <FruitInfo product={product} />
          </>
        ) : (
          <div>로딩 중...</div>
        )}
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  gap: 20px;
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export default FruitDetailPage;
