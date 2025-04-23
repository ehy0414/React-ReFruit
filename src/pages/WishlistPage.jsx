"use client";
import styled from "styled-components";
import { WishlistCard } from "../modules/wishlist/WishlistCard";
import { useState, useEffect } from "react";
import api from "../api/axios";
import Footer from "../components/layout/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishListContext";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 68%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: Hakgyoansim Allimjang OTF R;
  letter-spacing: 1px;
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Pagination = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-family: "Poppins", sans-serif;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const ITEMS_PER_PAGE = 20;

export const WishlistPage = () => {
    const { wishlist, removeFromWishlist } = useWishlist();
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            alert("로그인 후 이용가능합니다.");
            navigate("/login");
        }
    }, [navigate]);

    const handleDelete = async (id) => {
        try {
            await removeFromWishlist(id); // context 함수 사용
            alert("삭제 되었습니다");
        } catch (err) {
            console.error("삭제 실패:", err);
        }
    };


  // ✅ 페이지 바뀔 때 상단 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = wishlist.slice(startIndex, endIndex);

  const hasNextPage = endIndex < wishlist.length;
  const hasPrevPage = page > 1;

  return (
    <>
      <Container>
        <Title>Wishlist ({wishlist.length})</Title>
        <CardGrid>
          {currentItems.map((item) => (
            <WishlistCard
              key={item.id}
              name={item.title}
              price={item.currentPrice}
              originalPrice={item.originalPrice}
              discount={item.discount}
              imageUrl={item.productImage}
              onDelete={() => handleDelete(item.id)}
            />
          ))}
        </CardGrid>

        <Pagination>
          <Button onClick={() => setPage((prev) => prev - 1)} disabled={!hasPrevPage}>
            이전
          </Button>
          <Button onClick={() => setPage((prev) => prev + 1)} disabled={!hasNextPage}>
            다음
          </Button>
        </Pagination>
      </Container>
      <Footer />
    </>
  );
};

export default WishlistPage;
