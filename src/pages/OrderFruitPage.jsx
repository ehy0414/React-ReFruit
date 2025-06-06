"use client";
import styled from "styled-components";
import OrderDetails from "../modules/order/OrderDetails";
import OrderSummary from "../modules/order/OrderSummary";
import Footer from "../components/layout/footer/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";


const OrderFruitPage = () => {
  const location = useLocation();
  const fruitInfo = { ...location.state };

  const [orderInfo, setOrderInfo] = useState({
    name: '',
    address: '',
    detailAddress: '',
    phone: ''
  });

  return (
    <FormContainer>
      <FormLayout>
        <MainColumn>
          <OrderDetails fruitInfo={fruitInfo} orderInfo={orderInfo} setOrderInfo={setOrderInfo} />
        </MainColumn>
        <SideColumn>
          <OrderSummary fruitInfo={fruitInfo} orderInfo={orderInfo} />
        </SideColumn>
      </FormLayout>
      <Footer />
    </FormContainer>
  );
};


const FormContainer = styled.main`
    width:100%;
    height:100%;
`;

const FormLayout = styled.div`
  gap: 20px;
  display: flex;
  width: 80%;
  margin-left: 12%;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 63%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 38%;
  margin-left: -100px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export default OrderFruitPage;
