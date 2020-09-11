import styled from "styled-components";

const PageContainer = styled.div`
  min-width: 375px;
`;

const NavSection = styled.div`
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
  border-bottom: 1px solid black;
  border-top: 8px solid #871612;
`;

const Banner = styled.div`
  width: 100%;
  color: #d5d5d5;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  font-size: 12px;
  padding: 4px;

  span {
    color: #871612;
    margin: 0;
  }

  p {
    margin: 0;
    text-align: center;
  }

  @media (min-width: 900px) {
    display: none;
  }
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

const CountCountainer = styled.div`
  color: #d5d5d5;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;

  span {
    color: #871612;
    margin: 0;
  }

  p {
    margin: 0;
    text-align: center;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
  position: relative;
`;

const Button = styled.a`
  :hover {
    color: #871612;
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

const TitleSection = styled.div`
  padding: 32px 0;
  //   height: 500px;

  @media (max-width: 900px) {
    padding-top: 16px;
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
`;

const VidContainer = styled.div`
  position: absolute;
  bottom: -24px;
  width: 640px;

  @media (max-width: 900px) {
    position: absolute;
    bottom: -24px;
    width: 90%;
  }
`;

const VidSection = styled.div`
  height: 340px;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0;

  @media (max-width: 900px) {
    height: 320px;
  }
`;

const Featuring = styled.div`
  width: 100%;
  background: #d5d5d5;
  padding: 56px 0 32px 0;

  h2 {
    font-size: 32px;
  }

  @media (max-width: 900px) {
    h5 {
      margin-bottom: 0;
    }
  }
`;

const HeadShot = styled.img`
  width: 100%;
  max-width: 175px;
  height: auto;

  @media (max-width: 900px) {
    min-width: 150px;
  }
`;

const HostShot = styled.img`
  width: 200px;
  height: auto;

  @media (max-width: 900px) {
    width: 100px;
  }
`;

const HeadShotContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 8px;
    row-gap: 8px;
  }
`;

const ProfileContainer = styled.div`
  text-align: center;

  h5 {
    margin-top: 16px;
    font-size: 24px;
    padding: 0 8px;
  }
  p {
    margin-top: 0;
    font-size: 16px;
    padding-bottom: 16px;
  }
`;

const HostedSection = styled.div`
  background: black;
  padding: 32px 0px;

  .hosted {
    grid-template-columns: 1fr 1fr 1fr;
  }

  h2 {
    color: #f0f0f0;
    margin-bottom: 32px;
  }

  h5 {
    color: #f0f0f0;
  }
`;

const Description = styled.div`
  margin: 32px 0 42px 0;

  h2 {
    margin-bottom: 32px;
  }

  ul {
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 40px;
  }
`;

const ShowTime = styled.div`
  background: #871612;
  padding 32px 0;

  @media (max-width: 900px) {
    padding: 16px;

    p{
        font-size: 24px;
    }
  }

  h2 {
      font-size: 38px;
      color: #000;
  }
  p{
    color: #000;
  }

`;

const TimeUs = styled.div`
  width: 400px;
  font-size: 32px;

  @media (max-width: 900px) {
    width: 300px;
  }
`;

const TimeOz = styled.div`
  width: 400px;
  font-size: 32px;
  margin-right: 0;
  align-self: center;

  .west {
    align-self: end;
  }

  @media (max-width: 900px) {
    width: 300px;
  }
`;

const TimeWOz = styled.div`
  width: 400px;
  font-size: 32px;
  margin-right: 0;
  align-self: flex-end;

  @media (max-width: 900px) {
    width: 300px;
  }
`;

const ShowContent = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const FaqSection = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 38px 16px 38px 16px;

  h2 {
    font-size: 32px;
  }
`;

const FaqContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

  h2 {
    width: 100%;
  }
`;

const ColumnOne = styled.div`
  max-width: 300px;
  width: 50%;
  padding-right: 8px;

  h4 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
  a {
    color: #871612;
    :hover {
      color: #871612;
    }
  }
`;

const ColumnTwo = styled.div`
  width: 50%;
  max-width: 300px;
  padding-left: 8px;

  h4 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
  a {
    color: #871612;
    :hover {
      color: #871612;
    }
  }
`;

const Footer = styled.div`
  width: 100%;
  background: black;
  padding: 16px;
  display: flex;
  justify-content: space-between;

  div {
    text-align: center;
  }

  h4 {
    color: white;
  }

  a {
    margin-top: auto;
    margin-bottom: auto;
    color: #871612;
    :hover {
      color: white;
    }
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

const SorryBanner = styled.div`
  min-width: 375px;
  min-height: 32px;
  padding: 8px 12px;
  text-align: center;
  background-color: red;
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

const HeaderImg = styled.img`
  width: 100%;
`;

export {
  Banner,
  ContentContainer,
  Button,
  NavBar,
  TitleSection,
  VidContainer,
  Featuring,
  HeadShot,
  HeadShotContainer,
  ProfileContainer,
  HostedSection,
  Description,
  ShowTime,
  TimeUs,
  TimeOz,
  ShowContent,
  FaqSection,
  FaqContainer,
  ColumnOne,
  ColumnTwo,
  Footer,
  PageContainer,
  VidSection,
  NavSection,
  SorryBanner,
  KoloheBanner,
  HeaderImg,
  TimeWOz,
  HostShot,
  CountCountainer,
};
