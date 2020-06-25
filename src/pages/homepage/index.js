import React, { useState, useEffect } from "react";

import { ContentContainer } from "../../components/UI";
import {
  Header,
  Headline,
  Sub,
  Byline,
  StabHighLogo
} from "../../components/header/index";

import {
  Hero,
  Section,
  FlexSection,
  SectionTitle,
  SectionCopy,
  Lines,
  Line,
  FaqContainer
} from "./styles";

import faqData from "../../faq.json";

import Faq from "../../components/faq/index";

import StabHighBanner from "../../lib/assets/banner.svg";
import StabHighIcon from "../../lib/assets/stab-high-logo.svg";
import MelbourneMap from "../../lib/assets/Map.png";

const Homepage = () => {
  const [fade, setFadeOpacity] = useState(true);

  const handleHeroFade = () => {
    if (window.scrollY > 200 && fade) {
      setFadeOpacity(false);
    }

    if (window.scrollY < 200) {
      setFadeOpacity(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleHeroFade(), true);

    if (window.InplayerPaywall) {
      console.log("window.", window.InplayerPaywall);
      var paywall = new window.InplayerPaywall(
        "23b08bc0-c50c-4bb1-8606-6a2db940919e",
        [
          {
            id: 91519,
            options: {
              brandingId: 472,
              preselectedFeeId: 113142
            }
          }
        ]
      );
    }

    return () =>
      window.removeEventListener("scroll", () => handleHeroFade(), true);
  }, []);

  return (
    <div>
      <Lines>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
      </Lines>
      <ContentContainer>
        <Header>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img className="banner" src={StabHighBanner} />
            <a
              target="_blank"
              className="cta"
              href="https://www.eventbrite.com.au/e/stab-high-an-international-surfing-contest-in-melbourne-tickets-95535339773?aff=ebdssbeac"
            >
              Buy Tickets
            </a>
          </div>
          <Byline>
            <label>
              MARCH 21, 2020 <span>URBNSURF</span> MELBOURNE, AUS
            </label>
            <StabHighLogo src={StabHighIcon} />
          </Byline>
        </Header>
      </ContentContainer>
      <Hero fade={fade}></Hero>
      <Section id="about" pulledUp>
        <SectionTitle>
          Featuring Noa Deane, Harry Bryant, Mason Ho, Matt Meola and more on an
          artificial kicker...
        </SectionTitle>
        <SectionCopy>
          100% of ticket sales and 100% of Pay per view will be donated to
          Greening Australia.{" "}
          <a target="_blank" href="https://www.greeningaustralia.org.au/">
            These guys
          </a>
          . March 21, 2020, at URBNSURF Melbourne (just five minutes from MEL
          Airport). Event start 11am. Finals from 3pm. Live entertainment starts
          at 4pm: Cupid and the Stupids, The Oogars, and Goons of Doom.
        </SectionCopy>
        <a
          target="_blank"
          className="cta-section"
          href="https://www.eventbrite.com.au/e/stab-high-an-international-surfing-contest-in-melbourne-tickets-95535339773?aff=ebdssbeac"
        >
          Buy Tickets
        </a>
      </Section>

      <Section>
        <SectionTitle>Purchase Live Stream</SectionTitle>
        <div
          id="inplayer-91519"
          className="inplayer-paywall preview-frame"
        ></div>
      </Section>
      <Section id="faq" topSpace>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FaqContainer>
          {faqData.faqs.map(f => (
            <Faq
              key={f.title}
              title={f.title}
              p1={f.paragraph_one}
              p2={f.paragraph_two}
            />
          ))}
        </FaqContainer>
      </Section>
    </div>
  );
};

export default Homepage;
