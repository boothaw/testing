import styled from "styled-components";

const Banner = styled.div`
  width: 100vw;
  height: 8px;
  background: blue;
  margin-bottom: 16px;
`;

const ContentContainer = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
  position: relative;
`;

const Button = styled.button`
  background: white;
  color: black;
  border: 2px solid black;
  padding: 0 16px;
`;

const NavBar = styled.div`
  height: 42px;
  display: flex;
  justify-content: space-between;

  div img {
    height: 42px;
  }
`;

const TitleSection = styled.div`
  padding-top: 32px;

  h2 {
    max-width: 575px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 36px;
    font-weight: bold;
    line-height: 38px;
  }
`;

const VidContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;
  padding-right: 16px;
  padding-left: 16px;
  margin-bottom: -32px;
`;

const Featuring = styled.div`
  width: 100%;
  background: orange;
  padding-top: 72px;

  h2 {
    font-size: 32px;
  }
`;

const HeadShot = styled.img`
  width: 275px;
  height: auto;
`;

const HeadShotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const ProfileContainer = styled.div`
  text-align: center;

  h5 {
    margin-top: 16px;
    font-size: 24px;
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

  h2 {
    color: white;
    margin-bottom: 32px;
  }

  h5 {
    color: white;
  }
`;

const Description = styled.div`
  margin: 32px 0 42px 0;

  h2 {
    margin-bottom: 32px;
  }

  ul {
    max-width: 750px;
    text-align: justified;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ShowTime = styled.div`
  background: purple;
  padding 32px 0;
  

  h2 {
      font-size: 38px;
  }

`;

const TimeUs = styled.div`
  width: 400px;
  font-size: 32px;
`;

const TimeOz = styled.div`
  width: 400px;
  font-size: 32px;
  margin-right: 0;
  align-self: flex-end;
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
  padding-right: 6px;

  h4 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
`;

const ColumnTwo = styled.div`
  max-width: 300px;
  padding-left: 6px;

  h4 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
`;

const Footer = styled.div`
  width: 100%;
  background: black;
  padding: 32px 16px;
  display: flex;
  justify-content: space-between;

  h4 {
    color: white;
  }

  a {
    margin-top: 0;
    color: red;
  }
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
};
