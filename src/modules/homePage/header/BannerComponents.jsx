import styled from "styled-components";

export const BannerContainer = styled.section`
  width: 100%;
  max-width: 1184px;
  height: 344px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  background-color: #000;

  @media (max-width: 991px) {
    height: auto;
    padding-bottom: 60px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 58px 64px;

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
  color: #fafafa;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

export const PromotionalText = styled.h1`
  color: #fafafa;
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 1.92px;
  max-width: 294px;
  margin-top: 5px;

  @media (max-width: 991px) {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 1.44px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 1.12px;
    margin-top: 16px;
  }
`;

export const CTASection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 22px;

  @media (max-width: 640px) {
    margin-top: 20px;
  }
`;

export const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CTAText = styled.span`
  color: #fafafa;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const CTAUnderline = styled.div`
  text-decoration-line: underline;
  width: 81px;
  height: 1px;
  background-color: #fafafa;
`;

export const ProductImage = styled.img`
  position: absolute;
  right: 292px;
  top: 16px;
  width: 580px;
  height: 280px;
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  margin: 0 auto;

  @media (max-width: 991px) {
    position: relative;
    right: auto;
    top: auto;
    width: 100%;
    max-width: 496px;
    height: auto;
    margin: 40px auto 0;
    display: block;
  }

  @media (max-width: 640px) {
    margin: 32px auto 0;
  }
`;

export const NavigationContainer = styled.nav`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  
  display: flex; /* ⭐ 가로 정렬을 위한 핵심 */
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    bottom: 16px;
  }
`;


export const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 6px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#fff" : "#666")};
  cursor: pointer;
  transition: background-color 0.3s;

  @media (max-width: 640px) {
    width: 8px;
    height: 8px;
    margin: 0 4px;
  }
`;