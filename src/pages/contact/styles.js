import styled from "styled-components";

const PageContainer = styled.div`
  min-width: 375px;
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto auto;
`;

const ContentWrapper = styled.div``;

const NavSection = styled.div`
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
  border-bottom: 1px solid black;
`;

const Banner = styled.div`
  width: 100%;
  height: 8px;
  background: #871612;
`;

const NavBar = styled.div`
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a img {
    height: 42px;
  }

  @media (max-width: 900px) {
    padding: 8px 16px;

    div img {
      height: 32px;
    }
  }
`;

const KoloheBanner = styled.div`
  width: 100%;
  background: #598cc0;
  text-align: center;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;

  a {
    color: white;
  }
`;

const Button = styled.a`
  :hover {
    color: #598cc0;
  }
  background: white;
  color: black;
  border: 2px solid black;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.2s ease;
  ${(props) => props.mb && `margin-bottom: ${props.mb};`}
  & {
    transform: scale(1.02);
  }

  @media (max-width: 900px) {
    font-size: 16px;
    padding: 4px;
  }
`;

const Footer = styled.div`
  min-width: 375px;

  width: 100%;
  background: black;
  padding: 16px;
  display: flex;
  justify-content: space-between;

  position: absolute;
  bottom: 0;
  margin-bottom: 0;

  div {
    text-align: center;
  }

  h4 {
    color: #f0f0f0;
  }

  a {
    margin-top: auto;
    margin-bottom: auto;
    color: red;
  }

  @media (max-width: 900px) {
    padding: 16px 8px;

    img {
      height: 32px;
    }

    h4 {
      font-size: 12px;
    }
  }
`;

const ContentContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
`;

const TitleSection = styled.div`
  padding: 32px 0 16px;

  @media (max-width: 900px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  h2 {
    max-width: 575px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 36px;
    line-height: 38px;

    @media (max-width: 900px) {
      font-size: 24px;
    }
  }

  p {
    padding: 12px 0 0 0;
    max-width: 550px;
    margin: 0;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-content: center;

  img {
    padding: 0 32px 0 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 900px) {
    div {
      font-size: 12px;
    }
    img {
      padding: 16px;
      height: 100px;
      width: 100px;
    }
  }
`;

export {
  PageContainer,
  NavSection,
  Banner,
  NavBar,
  KoloheBanner,
  Button,
  Footer,
  ContentContainer,
  TitleSection,
  ContactInfo,
  ContentWrapper,
};
