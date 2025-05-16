import styled from "styled-components";

const ReceiptCard = ({ order }) => {
  return (
    <ReceiptWrapper>
      <ReceiptPaper>
        <StoreName>🍊 ReFruit</StoreName>
        <DashedLine />
        <Section>
          <Row><Label>주문번호</Label><Value>{order.id}</Value></Row>
          <Row><Label>상품명</Label><Value>{order.title}</Value></Row>
          <Row><Label>수량</Label><Value>{order.cnt}개</Value></Row>
          <Row><Label>금액</Label><Value>{order.price}원</Value></Row>
        </Section>
        <DashedLine />
        <Section>
          <Row><Label>구매자</Label><Value>{order.userName}</Value></Row>
          <Row><Label>이메일</Label><Value>{order.userEmail}</Value></Row>
          <Row><Label>연락처</Label><Value>{order.phone}</Value></Row>
          <Row><Label>배송지</Label><Value>{order.address} {order.detailAddress}</Value></Row>
        </Section>
        <DashedLine />
        <Section>
          <Row><Label>판매자</Label><Value>{order.business}</Value></Row>
          <Row><Label>위치</Label><Value>{order.location}</Value></Row>
        </Section>
        <DashedLine />
        <Footer>감사합니다. 좋은 하루 되세요! 🧾</Footer>
      </ReceiptPaper>
    </ReceiptWrapper>
  );
};

export default ReceiptCard;
const ReceiptWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const ReceiptPaper = styled.div`
  width: 320px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  font-family: "Courier New", Courier, monospace;
`;

const StoreName = styled.h2`
  text-align: center;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const DashedLine = styled.hr`
  border: none;
  border-top: 1px dashed #999;
  margin: 12px 0;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const Label = styled.span`
  color: #333;
  font-weight: 500;
`;

const Value = styled.span`
  color: #555;
`;

const Footer = styled.div`
  margin-top: 16px;
  font-size: 13px;
  text-align: center;
  color: #666;
`;
