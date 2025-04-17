import styled from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4); /* 반투명 배경 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  position: relative;
  padding: 58px 64px;
  z-index: 2;

  @media (max-width: 991px) {
    padding: 40px 32px;
  }

  @media (max-width: 640px) {
    padding: 32px 24px;
  }
`;

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 640px) {
    gap: 16px;
  }
`;

export const ProductTitle = styled.h2`
  color: #db4444;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

export const NavigationContainer = styled.nav`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 3;

  @media (max-width: 640px) {
    bottom: 16px;
  }
`;

export const DotWrapper = styled.div`
  padding: 2px; /* 도트 주변을 클릭해도 동작하게 하기 위한 터치 영역 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 1px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#fff" : "#aaa")};
  cursor: pointer;
  transition: background-color 0.3s;

  @media (max-width: 640px) {
    width: 8px;
    height: 8px;
    margin: 0 4px;
  }
`;
