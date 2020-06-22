import styled from "styled-components";
import theme from "../../lib/styles/theme";

const Header = styled.div`
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 120px;

  .banner {
    height: 320px;
    margin-bottom: 48px;
  }

  .cta {
    margin-top: 32px;
    background-color: black;
    color: white;
    height: 32px;
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    font-family: ${theme.fonts.sans};

    @media (min-width: 901px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    .banner {
      height: 200px;
      margin-bottom: 48px;
    }
  }

  @media (max-width: 720px) {
    min-height: 260px;

    padding-left: 0px;
    padding-right: 0px;

    .banner {
      max-height: 120px;
      height: 120px;
      width: auto;
      margin-bottom: 0px;
    }
  }
`;

const Headline = styled.h1`
  width: 75%;
  font-family: ${theme.fonts.sans};
  font-size: 60px;
  margin-bottom: 12px;

  @media (max-width: 720px) {
    width: 100%;
    font-size: 28px;
  }
`;

const Sub = styled.h2`
  margin-top: 0px;
  position: relative;
  padding-left: 42px;
  font-size: 16px;
  font-family: ${theme.fonts.serif};
  font-style: italic;
  font-weight: 400;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    height: 3px;
    width: 32px;
    top: 10px;
    background-color: ${theme.colors.red};
  }
`;

const Byline = styled.div`
  font-family: ${theme.fonts.sans};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  text-align: right;

  label {
    padding-bottom: 12px;
  }

  span {
    padding: 0 6px;
    color: ${theme.colors.red};

    @media (max-width: 720px) {
      padding: 0px;
    }
  }
`;

const StabHighLogo = styled.img`
  margin-left: 12px;
  margin-bottom: 6px;
  height: 72px;

  @media (max-width: 720px) {
    height: 60px;
  }
`;

export { Header, Headline, Sub, Byline, StabHighLogo };
