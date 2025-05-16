import styled from "styled-components";
import ViewProductCard from "../../modules/components/ViewProductCard";
import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const KiwiListPage = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const getProducts = async () => {
            try {
                const res = await api.get("/products?category=kiwi");
                setProducts(res.data);
            } catch (error) {
                console.error(error);
            }
        };
    
        useEffect(() => {
            getProducts();
        },[]);

        const handleClick = (products) => {
          navigate(`/fruit/detail/${products.id}`);
        };

    return (
        <Container>
          <Title>이달의 상품 목록</Title>
          {products.map((product) => (
          <ViewProductCard key={product.id} product={product} onClick={()=> {handleClick(product)}}/>
        ))}
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


export default KiwiListPage;