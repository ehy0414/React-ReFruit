import styled from "styled-components";

export const FruitImages = () => {
  return (
    <ImageColumn>
      <ImageContainer>
        <ProductImg src="https://cdn.builder.io/api/v1/image/assets/7adddd5587f24b91884c2915be4df62c/efd3b56e64e75b4bb77b9934aa355066ee8fa2ac?placeholderIfAbsent=true" alt="Havic HV G-92 Gamepad" />
      </ImageContainer>
    </ImageColumn>
  );
};

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 40%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  justify-content: center;
  align-items: stretch;
  border-radius: 4px;
  background-color: #f5f5f5;
  display: flex;
  flex-grow: 1;
  padding: 100px 27px;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 100px 20px;
  }
`;

const ProductImg = styled.img`
  aspect-ratio: 1.42;
  object-fit: contain;
  object-position: center;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
