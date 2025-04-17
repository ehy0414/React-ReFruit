"use client";
import styled from "styled-components";

export const FruitQuantity = ({ quantity, setQuantity }) => {

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <QuantityContainer>
      <QuantityButton onClick={decreaseQuantity}>
        <img src="https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/a773769c18dc338da4aed685a5185d39a5fcde18?placeholderIfAbsent=true" alt="Decrease quantity" />
      </QuantityButton>
      <QuantityDisplay>{quantity}</QuantityDisplay>
      <QuantityButton onClick={increaseQuantity}>
        <img src="https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/f607e1a8681165da6cbf6be1c0d81ea3a6c3d392?placeholderIfAbsent=true" alt="Increase quantity" />
      </QuantityButton>
    </QuantityContainer>
  );
};

const QuantityContainer = styled.div`
  display: flex;
  min-height: 44px;
  align-items: start;
  gap: -1px;
  margin-right: 90px;
  font-size: 20px;
  color: #000;
  white-space: nowrap;
  line-height: 1.4;
  justify-content: start;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const QuantityButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    aspect-ratio: ${(props) =>
      props.children.props.src === "https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/a773769c18dc338da4aed685a5185d39a5fcde18?placeholderIfAbsent=true" ? "0.91" : "0.93"};
    object-fit: contain;
    object-position: center;
    width: ${(props) =>
      props.children.props.src === "https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/a773769c18dc338da4aed685a5185d39a5fcde18?placeholderIfAbsent=true" ? "40px" : "41px"};
    border-radius: ${(props) =>
      props.children.props.src === "https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/a773769c18dc338da4aed685a5185d39a5fcde18?placeholderIfAbsent=true" ? "4px 0px 0px 4px" : "0"};
  }
`;

const QuantityDisplay = styled.div`
  border-color: rgba(0, 0, 0, 0.5);
  border: 1px solid lightgray;
  padding: 7px 24px;
  overflow: hidden;
  width: 40px;
  text-align: center;
  @media (max-width: 991px) {
    padding: 8px 20px;
    white-space: initial;
  }
`;
