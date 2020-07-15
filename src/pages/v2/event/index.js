import React, { useState, useEffect } from "react";

import Surf100Logo from "../../../lib/assets/surf-100.png";

import { surfers_melbourne_2020 } from "../../../surfers";

import {
  Nav,
  PageContainer,
  Main,
  Panel,
  EventDetails,
  EventBanner,
  MenuBar,
  MenuItem,
  MainSection,
  SubTitle,
  SectionTitle,
  SecondaryText,
  SectionCopy,
  SectionBlock,
  ButtonSecondary,
  MobileView,
  DesktopView,
  StickyScroll,
  IframeContainer,
  S100Logo,
  BodyContainer,
  SeeMoreButton,
  Title,
  CompetitorRow,
  CompetitorCard,
  Input
} from "./styles";

const EventPage = () => {
  const [activeTab, setActiveTab] = useState("Scoring");
  const [loading, setLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const emailRegistered = localStorage.getItem("SURF100.email");

    if (emailRegistered) {
      setEmail(emailRegistered);
      setIsRegistered(true);
    }

    if (window.InplayerPaywall) {
      var paywall = new window.InplayerPaywall(
        "23b08bc0-c50c-4bb1-8606-6a2db940919e",
        [
          {
            id: 108337
          }
        ]
      );

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  const handleEmailSave = () => {
    // VALIDATE
    if (email.trim().length) {
      // STORE TO LOCAL STORAGE
      localStorage.setItem("SURF100.email", email);
      setIsRegistered(true);

      // PASS TO PARAMETER TO IFRAME... by using the email value in state.
    } else {
      alert("Please enter a valid email!");
    }
  };

  const renderCTA = () => {
    return (
      <>
        <Title>Details</Title>
        <SubTitle>
          Duis pharetra dictum hendrerit. Morbi nisi turpis, elementum vel
          tristique non.{" "}
        </SubTitle>

        <div className="dates-and-price">
          <div className="row">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            Tues. 21 July 2020 6:00pm AEDT
          </div>
          <div className="row">
            <i class="fa fa-ticket" aria-hidden="true"></i>
            $14.99
          </div>
        </div>
      </>
    );
  };

  const renderGiveAway = () => {
    return (
      <>
        <div className="host-banner">
          <div className="host">
            {/* need permission or better logo for lost img here */}
            <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/10517675_10152745041342688_1556850807273125968_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=8s_gIcQNuGIAX8g4ija&_nc_ht=scontent-sea1-1.xx&oh=5c6de695163248a8e5cc4e8591429489&oe=5F1AABC6" />{" "}
          </div>
          <div>
            <Title>...Lost Giveaway</Title>
            <label></label>
          </div>
        </div>
        <SecondaryText>
          Matt ‘Mayhem’ Biolos is a revered San Clemente shaper, surf film
          director, and always-abiding alliterator. He also happens to construct
          surfboards for all three of our Surf100 competitors, making this event
          one big (free) advertisement for his product.{" "}
        </SecondaryText>
        <SeeMoreButton onClick={() => window.location.replace("/#giveaway")}>
          See More...
        </SeeMoreButton>

        {isRegistered ? (
          <div>
            {" "}
            <h3>Registration Complete!</h3>
          </div>
        ) : (
          <div>
            <Input
              onChange={e => setEmail(e.currentTarget.value)}
              value={email}
              placeholder="Email address"
            />
            <ButtonSecondary onClick={handleEmailSave}>Submit</ButtonSecondary>
          </div>
        )}
      </>
    );
  };

  const renderScoring = emailAddress => {
    return (
      <IframeContainer>
        <iframe
          width="100%"
          height="100%"
          id="scaled-frame"
          src={`https://bsview.s3-us-west-2.amazonaws.com/index_stab100.html?user=${emailAddress}`}
          frameBorder="no"
          allowTransparency="true"
          allowFullscreen="true"
        ></iframe>
      </IframeContainer>
    );
  };

  return (
    <>
      <Nav>
        <img src={Surf100Logo} />
        <div>
          <a
            style={{ marginLeft: "8px", fontSize: "18px" }}
            target="_blank"
            href="https://www.facebook.com/StabSurfMagazine/"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            style={{ marginLeft: "8px", fontSize: "18px" }}
            target="_blank"
            href="https://www.instagram.com/surf100.tv/?hl=en"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>

          <a
            style={{ marginLeft: "8px", fontSize: "18px" }}
            target="_blank"
            href="https://twitter.com/stabmagazine?lang=en"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </Nav>
      <PageContainer>
        <BodyContainer>
          <Main>
            <div
              id="inplayer-108337"
              className="inplayer-paywall preview-frame"
            ></div>
            {renderScoring(email)}
            <MenuBar>
              <MenuItem
                href="/#concept"
                onClick={() => setActiveTab("Concept")}
                active={activeTab === "Concept"}
              >
                Concept
              </MenuItem>
              <MenuItem
                href="/#description"
                onClick={() => setActiveTab("Description")}
                active={activeTab === "Description"}
              >
                Description
              </MenuItem>
              <MenuItem
                href="/#scoring"
                onClick={() => setActiveTab("Scoring")}
                active={activeTab === "Scoring"}
              >
                Scoring
              </MenuItem>
              {/* <MenuItem
              href="/#schedule"
              onClick={() => setActiveTab("Schedule")}
              active={activeTab === "Schedule"}
            >
              Schedule
            </MenuItem> */}
              <MenuItem
                href="/#giveaway"
                onClick={() => setActiveTab("Giveaway")}
                active={activeTab === "Giveaway"}
              >
                Giveaway
              </MenuItem>
              <MenuItem
                href="/#competitors"
                onClick={() => setActiveTab("Competitors")}
                active={activeTab === "Competitors"}
              >
                Competitors
              </MenuItem>
            </MenuBar>
            <MobileView>
              <EventDetails>
                <Title>Details</Title>
                <SubTitle>
                  Duis pharetra dictum hendrerit. Morbi nisi turpis, elementum
                  vel tristique non.{" "}
                </SubTitle>

                <div className="dates-and-price">
                  <div className="row">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    Tues. 21 July 2020 6:00pm AEDT
                  </div>
                  <div className="row">
                    <i class="fa fa-ticket" aria-hidden="true"></i>
                    $14.99
                  </div>
                </div>
              </EventDetails>
              <EventDetails>{renderGiveAway()}</EventDetails>
            </MobileView>
            <MainSection>
              <SectionBlock id="concept">
                <SectionTitle>Concept</SectionTitle>
                <SectionCopy>
                  <ul>
                    <li>
                      SURF100 is a video-part competition that takes place over
                      a single, 100-minute period and is judged live, at a later
                      date, by the internet. All of this is done following
                      social distancing guidelines.
                    </li>
                  </ul>
                </SectionCopy>
              </SectionBlock>
              <SectionBlock id="description">
                <SectionTitle>Description</SectionTitle>
                <SectionCopy>
                  <ul>
                    <li>
                      The first event will be held at Lower Trestles, but we
                      plan to recreate this format around the globe.
                    </li>
                  </ul>
                  <ul>
                    <li>Here’s how it works:</li>
                  </ul>
                  <ul>
                    <li>
                      Three prominent surfers from a shared region will convene
                      on a pristine day of waves at their local. They will surf
                      against one another for 100 minutes, attempting to capture
                      the best two-wave (right + left) video section in that
                      time.
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Unlike a traditional competition, the surfers will be
                      performing in a lineup of everyday punters, just as they
                      do every other day of the year. There are no spot permits,
                      water-clearings, start-of-the-session horns, nor enforced
                      priority between the surfers.
                    </li>
                  </ul>

                  <ul>
                    <li>
                      The 100 minutes start with the wave of the
                      local/state/country flag.{" "}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      The surfers can ride as many waves as they want in the
                      100-minute session. The waves will each be considered
                      separate “clips” that can be used in their final
                      “section”. Each section will consist of two clips—one
                      right, one left.
                    </li>
                  </ul>
                  <ul>
                    <li>The best section, according to the internet, wins. </li>
                  </ul>
                </SectionCopy>
              </SectionBlock>

              <SectionBlock id="scoring">
                <SectionTitle>How to score a wave:</SectionTitle>
                <SectionCopy>
                  <ul>
                    <li>
                      Our 50-point scale is based on 5 universal principles of
                      surf spectating: first impression, style/flow, wave
                      magnitude, productivity, and performance.
                    </li>
                  </ul>
                  <ul>
                    <li>Step 1: Watch the clip.</li>
                    <li>
                      Step 2: Consider the clip's quality relative to other
                      clips from the session.
                    </li>
                    <li>Step 3: Score the clip out of 50.</li>
                  </ul>
                  <ul>
                    <li>
                      Hint: If you're used to scoring clips out of 10, simply
                      multiply the score that came to your mind by 5.
                    </li>
                  </ul>
                  <ul>
                    <li>
                      So, if you think a clip is a 5/10, it would be a 25/50
                      here.
                    </li>
                  </ul>
                  <ul>
                    <li>Capiche?</li>
                  </ul>
                </SectionCopy>
              </SectionBlock>

              <SectionBlock id="giveaway">
                <SectionTitle>...Lost Giveaway</SectionTitle>
                <SectionCopy>
                  <ul>
                    <li>
                      Matt ‘Mayhem’ Biolos is a revered San Clemente shaper,
                      surf film director, and always-abiding alliterator. He
                      also happens to construct surfboards for all three of our
                      Surf100 competitors, making this event one big (free)
                      advertisement for his product.{" "}
                    </li>
                  </ul>
                  <ul>
                    <li>You’re welcome, Matt. </li>
                  </ul>

                  <ul>
                    <li>
                      Recognizing his good fortune and wanting to pay it
                      forward, Mayhem is offering a free board to one lucky
                      Surf100 viewer. Actually, it’s less about “luck” and more
                      about scoring a subjective sport as closely as possible to
                      another flawed human. Silly, yes, but officially a “game
                      of skill.”
                    </li>
                  </ul>
                  <ul>
                    <li>Here’s how you win: </li>
                  </ul>
                  <ul>
                    <li>
                      Score each wave in the event out of 50 points. The viewer
                      whose scores on average are closest to our head judge’s,
                      wins.
                    </li>
                  </ul>
                  <ul>
                    <li>
                      It’s that easy...and that arbitrary. Good lu-- skill!{" "}
                    </li>
                  </ul>
                </SectionCopy>
              </SectionBlock>

              <SectionBlock id="competitors">
                <SectionTitle>Competitors</SectionTitle>
                <CompetitorRow>
                  {surfers_melbourne_2020.map(surfer => (
                    <CompetitorCard key={surfer.name}>
                      <img src={surfer.photo} />
                      <div>
                        <h4>
                          {surfer.name}, {surfer.age}
                        </h4>
                        <h5>{surfer.hometown}</h5>
                        <p>{surfer.bio}</p>
                      </div>
                    </CompetitorCard>
                  ))}
                </CompetitorRow>
              </SectionBlock>
            </MainSection>
          </Main>
          <Panel>
            <DesktopView>
              <StickyScroll>
                <EventDetails>{renderCTA()}</EventDetails>
                <EventDetails>{renderGiveAway()}</EventDetails>
              </StickyScroll>
            </DesktopView>
          </Panel>
        </BodyContainer>
      </PageContainer>
    </>
  );
};

export default EventPage;
