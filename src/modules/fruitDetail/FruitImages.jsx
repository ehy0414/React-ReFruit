import styled from "styled-components";

export const FruitImages = ({image}) => {
  return (
    <ImageColumn>
      <ImageContainer>
        <ProductImg src={image} alt="Fruit Image" />
      </ImageContainer>
    </ImageColumn>
  );
};

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
    border-radius: 8px;

  width: 40%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  justify-content: center;
  align-items: stretch;
  display: flex;
    border-radius: 8px;

  flex-grow: 1;

  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 450px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 100px 20px;
  }
`;

const ProductImg = styled.img`
  object-fit: contain;
  object-position: center;
  width: 80%;
  border-radius: 8px;
  margin:0 auto;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
