import styled from "styled-components";

import heroBg from "../../lib/assets/hero.png";

import theme from "../../lib/styles/theme";

const Hero = styled.div`
  height: 642px;
  position: relative;
  background: url(${heroBg});
  background-size: cover;
  background-position: center;
  transition: 0.5s ease linear;

  background-attachment: fixed;

  opacity: ${({ fade }) => (fade ? "0.9" : "1")};

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
    transition: 0.5s ease linear;
  }

  @media (max-width: 720px) {
    height: 320px;
    background-attachment: initial;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Section = styled.div`
  padding: 60px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;

  a {
    color: ${theme.colors.red};
  }

  ${({ topSpace }) => topSpace && "margin-top: 0px;"}

  ${({ pulledUp }) =>
    pulledUp &&
    ` background-color: #fff;  margin-top: -32px; position: relative;`}

    @media (max-width: 720px) {
    padding: 16px;
    padding-top: 32px;
  }

  .cta-section {
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
  }

  .inplayer-paywall {
    width: 100%;
    color: #fff;

    .preview-text {
      color: #fff;
      position: absolute;
      bottom: -30px;
      width: 100%;
      text-align: center;
    }
  }

  .preview-frame {
    > div {
      position: relative;
      // overflow: hidden;
      padding-top: 56.25%;
    }

    .inplayer-preview-box {
      padding: 0px;
      border: none;
    }

    .iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
`;

const FlexSection = styled.div`
  display: flex;
`;

const SectionTitle = styled.h3`
  font-size: 32px;
  margin: 0px;
  font-family: ${theme.fonts.sans};

  @media (max-width: 720px) {
    font-size: 24px;
    line-height: 34px;
  }
`;

const SectionCopy = styled.p`
  font-family: ${theme.fonts.serif};
  line-height: 200%;
  margin-bottom: 0px;
`;

const Lines = styled.div`
  position: fixed;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Line = styled.div`
  height: 100%;
  width: 1px;
  background-color: #f5f5f5;
`;

const MapImage = styled.img`
  height: 300px;
`;

const FaqContainer = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
`;

export {
  Hero,
  Section,
  FlexSection,
  SectionTitle,
  SectionCopy,
  Lines,
  Line,
  MapImage,
  FaqContainer
};
