"use client";
import styled from "styled-components";
import { FruitImages } from "../modules/fruitDetail/FruitImages";
import { FruitInfo } from "../modules/fruitDetail/FruitInfo";
import Footer from "../components/layout/footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

const FruitDetailPage = () => {
  const {id} = useParams();
  const [product, setProduct] = useState();

  const getProduct = async () => {
    try {
        const res = await api.get(`/products?id=${id}`);
        setProduct(res.data[0]);
    } catch (error) {
        console.error(error);
    }
  };
  useEffect(() => {
    getProduct();
  },[id]);

  console.log(product);

  return (
    <Container>
      <ContentWrapper>
        {product ? (
          <>
            <FruitImages image={product.image} />
            <FruitInfo product={product} />
          </>
        ) : (
          <div>로딩 중...</div> // 로딩 스피너로 바꿔도 좋아요!
        )}
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.main`
    width:100%;
    height:100%;

`;

const ContentWrapper = styled.div`
  gap: 20px;
  display: flex;
  width:80%;
  margin: 0 auto;
  margin-top: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export default FruitDetailPage;
