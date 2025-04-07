import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>스마트미디어학과 엄현용 & 김성빈</p>
        <FooterLinks>
          <a href="https://github.com/ehy0414/react-recommend-community.git">GitHub Link</a> | <a href="#">Terms of Service</a>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color:rgb(0, 0, 0);
  color: white;
  padding: 20px 0;
  margin-top: 40px;
  bottom: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FooterLinks = styled.div`
  margin-top: 10px;
  color: white;

  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
