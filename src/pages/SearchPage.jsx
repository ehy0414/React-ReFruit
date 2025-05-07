import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import api from "../api/axios";
import ProductCard from "../modules/homePage/timeSale/ProductCard";

const ITEMS_PER_PAGE = 16;

const Container = styled.main`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 50px;
`;

const NoResult = styled.p`
  color: gray;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 24px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 16px;

  button {
    padding: 8px 16px;
    background-color: #db4444;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      cursor: default;
    }
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;


const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        const fetchAndFilterProducts = async () => {
        try {
            setLoading(true);
            const res = await api.get("/products");
            const filtered = res.data.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
            setCurrentPage(1); // 검색할 때마다 첫 페이지로 리셋
        } catch (err) {
            console.error("검색 오류:", err);
            setResults([]);
        } finally {
            setLoading(false);
        }
        };

        fetchAndFilterProducts();
    }, [query]);

    const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = results.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
    };
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, [currentPage]);

  return (
    <Container >
      <Title>"{query}"에 대한 검색 결과</Title>
        {loading ? (
            <p>로딩 중...</p>
        ) : results.length === 0 ? (
            <NoResult>검색 결과가 없습니다.</NoResult>
        ) : (
        <>
            <Grid>
                {currentItems.map((item) => (
                    <ProductCard key={item.id} product={item} onClick={() => {}} />
                ))}
            </Grid>
            <Pagination>
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    이전
                </button>
                <span>{currentPage} / {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    다음
                </button>
            </Pagination>
        </>
      )}
    </Container>
  );
};

export default SearchPage;
