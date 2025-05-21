import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../api/axios";
import ProductCard from "../modules/admin/ProductCard";
import HeaderBar from "../modules/admin/HeaderBar";

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
      <HeaderBar onAddClick={() => navigate("/admin/products/new")} />
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </ProductGrid>
    </PageContainer>
  );
};

export default AdminProductPage;

const PageContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 50px auto;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;
