import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const AdminProductPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await api.get("/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    alert("삭제가 되었습니다!");
    await api.delete(`/products/${id}`);
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <PageContainer>
      <Header>
        <Title>상품 관리</Title>
        <AddButton onClick={() => navigate("/admin/products/new")}>+ 상품 추가</AddButton>
      </Header>
      <ProductGrid>
        {products.map(p => (
          <ProductCard key={p.id}>
            <ProductImage src={p.image} alt={p.title} />
            <ProductInfo>
              <ProductTitle>{p.title}</ProductTitle>
              <ProductDesc>{p.content}</ProductDesc>
              <PriceRow>
                <CurrentPrice>{p.currentPrice}원</CurrentPrice>
                {p.discount && <Discount>{p.discount}</Discount>}
              </PriceRow>
              <TypeBadge type={p.type}>{p.type.toUpperCase()}</TypeBadge>
              <Business>{p.business} · {p.location}</Business>
              <ButtonRow>
                <EditButton onClick={() => navigate(`/admin/products/edit/${p.id}`)}>수정</EditButton>
                <DeleteButton onClick={() => handleDelete(p.id)}>삭제</DeleteButton>
              </ButtonRow>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </PageContainer>
  );
};

export default AdminProductPage;

// Styled Components
const PageContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 50px auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #2c3e50;
`;

const AddButton = styled.button`
  padding: 12px 24px;
  background-color: #27ae60;
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #219653;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 24px;
`;

const ProductCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 30px rgb(0 0 0 / 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 18px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #34495e;
  margin-bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductDesc = styled.p`
  flex: 1;
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 3줄 */
  -webkit-box-orient: vertical;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

const CurrentPrice = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: #27ae60;
`;

const Discount = styled.span`
  background: #e74c3c;
  color: white;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 13px;
`;

const TypeBadge = styled.span`
  background: ${props => props.type === "sale" ? "#3498db" : "#9b59b6"};
  color: white;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 13px;
  align-self: flex-start;
  margin-bottom: 10px;
`;

const Business = styled.span`
  font-size: 13px;
  color: #95a5a6;
  margin-bottom: 15px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;
`;

const EditButton = styled.button`
  background-color: #e74c3c;
  border: none;
  color: white;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c0392b;
  }
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  border: none;
  color: white;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c0392b;
  }
`;
