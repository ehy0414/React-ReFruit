import styled from "styled-components";
import { useEffect, useState } from "react";
import api from "../api/axios";
import ReceiptCard from "../modules/receipt/ReceiptCard";

const ReceiptListPage = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const res = await api.get(`/orders?userId=${userId}`); // API 경로에 맞게 수정
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Container>
      <Title>🧾 주문 내역</Title>
      <Grid>
        {orders.map((order) => (
          <ReceiptCard key={order.id} order={order} />
        ))}
      </Grid>
    </Container>
  );
};

export default ReceiptListPage;

const Container = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: bold;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;
