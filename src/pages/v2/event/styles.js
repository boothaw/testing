import styled from "styled-components";

import EventBannerImage from "../../../lib/assets/stab_melbourne_2020.jpg";

const Nav = styled.div`
  margin-bottom: 16px;
  height: 64px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  img {
    height: 30px;
  }
  a {
    color: #000;
  }
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 0px 16px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.div``;

const Panel = styled.div``;

const EventDetails = styled.div`
  padding: 24px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  border-radius: 8px;
  margin-bottom: 16px;
  @media (max-width: 900px) {
    padding: 16px;
  }
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
`;

const EventBanner = styled.div`
  height: 320px;
  background-image: url(${EventBannerImage});
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
  box-shadow: 0px 1px 2px rgba(44, 50, 66, 0.08);
  position: sticky;
  top: 0px;
  z-index: 3;
`;

const MenuItem = styled.a`
  flex: 1;
  display flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0px 24px;
  border-bottom: 2px solid ${props => (props.active ? "#000" : "#fff")};
  color: #000;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    padding: 0px;
    font-size: 12px;
  }
`;

const MainSection = styled.div`
  padding: 48px 24px;
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

const SectionCopy = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #757a8a;
  p {
    margin-top: 6px;
    margin-bottom: 6px;
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
    height: ${props => (props.large ? "100px" : "40px")};
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
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
  ${props => props.mb && `margin-bottom: ${props.mb};`}
  &:hover {
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
  &:hover {
    transform: scale(1.02);
  }
`;

const MobileView = styled.div`
  display: initial;
  @media (min-width: 900px) {
    display: none;
  }
`;

const DesktopView = styled.div`
  display: initial;
  @media (max-width: 900px) {
    display: none;
  }
`;

const StickyScroll = styled.div`
  position: sticky;
  top: 16px;
`;

const SorryBanner = styled.div`
  min-height: 32px;
  padding: 8px 12px;
  text-align: center;
  background-color: #e74c3c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const IframeContainer = styled.div`
  width: 802px;
  height: 555px;
  // resize: both;
  // overflow: auto;
  padding: 0;
  overflow: hidden;

  #scaled-frame {
    width: 1902px;
    height: 1050px;
    // border: purple dashed 1px;
    margin: 0;
  }

  #scaled-frame {
    zoom: 0.65;
    -moz-transform: scale(0.65);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.65);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.65);
    -webkit-transform-origin: 0 0;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    #scaled-frame {
      zoom: 1;
    }
  }

  @media (max-width: 900px) {
  margin-left: 0;
  margin-right: 0;
  
  #scaled-frame {

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
  IframeContainer
};
