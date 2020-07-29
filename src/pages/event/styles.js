import styled from "styled-components";

const Nav = styled.div`
  width: 100vw;
  height: 72px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  min-width: 420px;
  img {
    height: 30px;
  }
  a {
    color: #000;
  }

  @media (min-width: 900px) {
    position: sticky;
    top: 0px;
    z-index: 3;
  }
`;

const DesktopNavBar = styled.div`
  width: 100%;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileNavBar = styled.div`
  @media (min-width: 900px) {
    display: none;
  }

  @media (max-width: 900px) {
    box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
    position: sticky;
    top: 0px;
    z-index: 3;
  }
`;

const SocialContainer = styled.div`
  min-width: 68px;
`;

const PageContainer = styled.div`
  background-color: #fafafa;
  padding: 16px 16px 0;
  margin-left: auto;
  margin-right: auto;
  min-width: 420px;
`;

const BodyContainer = styled.div`
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  @media (max-width: 1205px) {
    grid-template-columns: 1fr;
  }

  background-color: #fafafa;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid #ccc;
  height: 48px;
  border-radius: 4px;
  width: 100%;
  padding: 0px 24px;
  box-sizing: border-box;
  margin-bottom: 12px;
  font-size: 18px;
`;

const Main = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  .inplayer-paywall {
    width: 100%;
    color: #fff;

    .brandheader {
      display: none;
    }

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
      // padding-top: 56.25%;
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

const Panel = styled.div``;

const EventDetails = styled.div`
  padding: 24px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  border-radius: 8px;
  margin-bottom: 16px;

  .dates-and-price {
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 24px;
    color: #2c3242;
  }
  .row {
    display: flex;
    align-items: center;
    i {
      margin-right: 4px;
    }
    :nth-of-type(2n) {
      margin-left: 16px;
    }
  }
  .host-banner {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    label {
      color: #757a8a;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
    }
    h2 {
      margin: 0px;
    }
  }
  .host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 76px;
    width: 76px;
    border: 1px solid #f1f2f5;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
    border-radius: 8px;
    margin-right: 12px;
    img {
      height: 60px;
    }
  }

  .hosts100 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 76px;
    width: 76px;
    border: 1px solid #f1f2f5;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
    border-radius: 8px;
    margin-right: 12px;
    img {
      height: 30px;
    }
  }
`;

const EventBanner = styled.div`
  height: 320px;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  @media (max-width: 900px) {
    height: 280px;
  }
`;

const MenuBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 64px;

  @media (max-width: 900px) {
    height: 72px;
  }
`;

const MenuItem = styled.a`
flex: 1;
display flex;
align-items: center;
justify-content: center;
height: 100%;
padding: 0px 24px;
 border-bottom: 2px solid ${(props) => (props.active ? "#000" : "#fff")};
color: #000;
text-decoration: none;
font-weight: bold;
font-size: 12px;
& {
  cursor: pointer;
}
@media (max-width: 900px) {
  padding: 8px;
  font-size: 12px;
}
`;

const MainSection = styled.div`
  padding: 24px 24px;
  margin-top: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  border-radius: 8px;
  @media (max-width: 900px) {
    padding-top: 24px;
  }
`;

const SectionBlock = styled.div`
  margin-bottom: 48px;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #2c3242;
`;

const SubTitle = styled.h4`
  font-size: 14px;
  line-height: 18px;
  color: #757a8a;
`;

const SecondaryText = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #757a8a;
`;

const SectionTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #2c3242;
`;

const SectionCopy = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #757a8a;

  p {
    margin-top: 6px;
    margin-bottom: 6px;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  .questions {
    margin-top: 16px;
  }
`;

const SponsorsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SponsorCard = styled.div`
  height: 120px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #f1f2f5;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: ${(props) => (props.large ? "100px" : "40px")};
  }
`;

const ScheduleCard = styled.div`
  margin-bottom: 8px;
  min-height: 116px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #f1f2f5;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  .label-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
    position: relative;
  }
  .avatars {
    height: 30px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    position: relative;
    img {
      position: absolute;
      height: 24px;
      width: 24px;
      object-fit: cover;
      border-radius: 40px;
      cursor: pointer;
      &:nth-of-type(1) {
        border: 2px solid white;
        right: 0px;
      }
      &:nth-of-type(2) {
        border: 2px solid white;
        right: 15px;
      }
      &:nth-of-type(3) {
        border: 2px solid white;
        right: 30px;
      }
      &:nth-of-type(4) {
        border: 2px solid white;
        right: 45px;
      }
      &:nth-of-type(5) {
        border: 2px solid white;
        right: 60px;
      }
      &:nth-of-type(6) {
        border: 2px solid white;
        right: 75px;
      }
      &:nth-of-type(7) {
        border: 2px solid white;
        right: 90px;
      }
      &:nth-of-type(8) {
        border: 2px solid white;
        right: 105px;
      }
    }
  }
  label {
    margin-bottom: 12px;
    padding: 4px 12px;
    background: #f5f5f5;
    border-radius: 4px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    color: #757a8a;
    margin-right: 6px;
    &.heat {
      color: #fe4d4d;
      background-color: #ffd3d3;
    }
    &.music {
      color: #175fff;
      background-color: #175fff22;
    }
    &.category {
      color: #175fff;
      background-color: #175fff22;
    }
  }
  h5 {
    margin: 0px;
    font-size: 16px;
    color: #2c3242;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    line-height: 16px;
    color: #757a8a;
  }
`;

const CompetitorRow = styled.div`
  display: row;
  grid-template-rows: 1fr;
  grid-row-gap: 16px;
`;

const CompetitorCard = styled.div`
  border: 1px solid #f1f2f5;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  border-radius: 8px;
  min-height: 90px;
  width: 100%;
  padding: 16px 16px;
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-top: 8px;
  h4 {
    margin-top: 0px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 13px;
    color: #757a8a;
  }
  img {
    margin-right: 14px;
    border-radius: 50px;
    object-fit: cover;
    height: 50px;
    width: 50px;
    min-width: 50px;
    border: 2px solid #fff;
  }
`;

const Button = styled.button`
  border: none;
  height: 48px;
  width: 100%;
  outline: none;
  background: #000;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: 0.2s ease;
  ${(props) => props.mb && `margin-bottom: ${props.mb};`}
  & {
    transform: scale(1.02);
  }
`;

const ButtonSecondary = styled.button`
  border: none;
  height: 48px;
  width: 100%;
  outline: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000;
  cursor: pointer;
  transition: 0.2s ease;
  border: 1px solid #e4e6eb;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  border-radius: 4px;
  & {
    transform: scale(1.02);
  }
`;

const MobileView = styled.div`
  display: initial;

  @media (min-width: 1205px) {
    display: none;
  }

  @media (max-width: 1205px) {
    display: row;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    margin-top: 16px;
  }
`;

const DesktopView = styled.div`
  display: initial;

  @media (max-width: 1205px) {
    display: none;
  }
`;

const StickyScroll = styled.div`
  position: sticky;
  top: 78px;
`;

const SorryBanner = styled.div`
  min-height: 32px;
  padding: 8px 12px;
  text-align: center;
  background-color: #e74c3c;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;

  h4 {
    color: white;
    margin-bottom: 0;
    font-weight: bold;
  }
`;

const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 875px;
  margin-left: auto;
  margin-right: auto;

  #scaled-frame {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin-bottom: 24px;
  }

  @media (min-width: 900px) {
    height: 325px;
  }

  @media (max-width: 900px) {
    min-height: 895px;
    // border: 1px solid pink;
  }
`;

const S100Logo = styled.div`
  img {
    height: 40px;
    margin-bottom: 8px;
  }
`;

const ExpandButton = styled.button`
  height: 48px;
  max-width: 852px;
  width: 100%;
  outline: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  padding: 8px;
  width: 100%;
  border: none;
  background-color: black;
  color: white;
  margin: 16px 0;
  padding: 0;
  cursor: pointer;
  transition: 0.2s ease;
  ${(props) => props.mb && `margin-bottom: ${props.mb};`}
  & {
    transform: scale(1.02);
  }

  @media (min-width: 900px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const FAQCard = styled.div`
  border: 1px solid #f1f2f5;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  border-radius: 8px;
  min-height: 90px;
  width: 100%;
  padding: 16px 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;

  h4 {
    margin-top: 0px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 13px;
    color: #757a8a;
  }
`;

const Footer = styled.div`
  width: 100%;
  background: black;
  padding: 16px;
  display: flex;
  justify-content: center;

  h4 {
    color: #f0f0f0;
  }

  a {
    margin-top: auto;
    margin-bottom: auto;
    color: red;
  }

  @media (max-width: 900px) {
    img {
      height: 32px;
    }

    h4 {
      font-size: 12px;
    }
  }
`;

export {
  Nav,
  PageContainer,
  Main,
  Panel,
  EventDetails,
  EventBanner,
  MenuBar,
  MenuItem,
  MainSection,
  Title,
  SecondaryText,
  SubTitle,
  SectionTitle,
  SectionCopy,
  SponsorsRow,
  SponsorCard,
  ScheduleCard,
  SectionBlock,
  CompetitorRow,
  CompetitorCard,
  Button,
  ButtonSecondary,
  MobileView,
  DesktopView,
  StickyScroll,
  SorryBanner,
  IframeContainer,
  S100Logo,
  BodyContainer,
  ExpandButton,
  Input,
  SocialContainer,
  DesktopNavBar,
  MobileNavBar,
  FAQCard,
  Footer,
};
