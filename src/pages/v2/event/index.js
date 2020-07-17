import React, { useState, useEffect } from "react";

import Surf100Logo from "../../../lib/assets/surf-100.png";

import { surfers_melbourne_2020 } from "../../../surfers";

import {
  Nav,
  PageContainer,
  Main,
  Panel,
  EventDetails,
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
        <Title>SURF100:</Title>
        <SubTitle>
          An audience judged 100-minute wave riding demonstration.
        </SubTitle>

        <div className="dates-and-price">
          <div className="row">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            Show live 6pm, Thursday July 23, California (PST)
          </div>
          <div className="row">
            & at 11am, Friday July 24, QLD/NSW/Vic (AEST)
          </div>
          <div className="row">
            <i className="fa fa-ticket" aria-hidden="true"></i>
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
          <div>
            <Title>How to score: </Title>
            <label></label>
          </div>
        </div>
        <SecondaryText>
          Scoring a clip out of 50 points is unusual, we admit. For simplicity’s
          sake, we recommend you{" "}
          {/* <Text style={{ fontWeight: "bold" }}> with</Text>score each ride out */}
          of 100, then cut it in half. Decimal points get rounded up to the
          nearest whole number. If you can’t do that math, please consult your
          local 4th grade teacher. Oh, and the “best” judge wins a custom
          Mayhem/...Lost quiver.
        </SecondaryText>
        <SeeMoreButton onClick={() => window.location.replace("/#giveaway")}>
          More on that below.
        </SeeMoreButton>
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
          allowtransparency="true"
          allowtullscreen="true"
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
            <EventDetails>
              {renderCTA()}
              {/* <ButtonSecondary onClick="">
                Purchase Pay-Per-View
              </ButtonSecondary> */}
            </EventDetails>

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
                What’s going here?
              </MenuItem>
              <MenuItem
                href="/#description"
                onClick={() => setActiveTab("Description")}
                active={activeTab === "Description"}
              >
                Ok, but how does it work?
              </MenuItem>

              <MenuItem
                href="/#giveaway"
                onClick={() => setActiveTab("Giveaway")}
                active={activeTab === "Giveaway"}
              >
                ...Lost Surfboard Giveaway
              </MenuItem>
              <MenuItem
                href="/#competitors"
                onClick={() => setActiveTab("Competitors")}
                active={activeTab === "Competitors"}
              >
                Who are these “surfers”, anyway?
              </MenuItem>
              <MenuItem
                href="/#faq"
                onClick={() => setActiveTab("FAQ")}
                active={activeTab === "FAQ"}
              >
                FAQ & Other Dumb Questions
              </MenuItem>
            </MenuBar>
            <MobileView>
              {/* <EventDetails>
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
              </EventDetails> */}
              <EventDetails>{renderGiveAway()}</EventDetails>
            </MobileView>
            <MainSection>
              <SectionBlock id="concept">
                <SectionTitle>What’s going here?</SectionTitle>
                <SectionCopy>
                  <ul>
                    <li>Easy, Karen. </li>
                    <li>
                      SURF100 is a waveriding exposition that takes place over a
                      single, 100-minute period and is judged live, at a later
                      date, by the internet. All of this is done following
                      social distancing guidelines.
                    </li>
                  </ul>
                </SectionCopy>
              </SectionBlock>
              <SectionBlock id="description">
                <SectionTitle>Ok, but how does it work?</SectionTitle>
                <SectionCopy>
                  <ul>
                    <li>
                      San Clemente’s own Kolohe Andino, Griffin Colapinto, and
                      Ian Crane will paddle out for a 100-minute waveriding
                      demonstration at Lower Trestles. While negotiating a
                      typical Lowers crowd, they’ll attempt to capture the best
                      two-wave (right + left) video section in the allotted
                      time.
                    </li>
                  </ul>
                  <ul>
                    <li>
                      The surfers can ride as many waves as they want in the
                      100-minute session. Each wave will be considered a
                      separate “clip” that can be used in their final “section”.
                      Each section will consist of two clips—one right, one
                      left—which will be judged out of 50 points apiece, 100
                      points total. (See above for more info on judging.){" "}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      The best section (two clip total), according to the
                      internet, wins.
                    </li>
                  </ul>
                </SectionCopy>
              </SectionBlock>

              <SectionBlock id="giveaway">
                <SectionTitle>...Lost Surfboard Giveaway</SectionTitle>
                <SectionCopy>
                  <ul>
                    <li>
                      All three Surf100 competitors ride the surfboards of
                      renowned San Clemente shaper and recent Stab in the Dark
                      winner, Matt ‘Mayhem’ Biolos.
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Matt, a fervent believer in internet justice, will shape a
                      three-board quiver to the most judicious SURF100 critic.
                    </li>
                  </ul>

                  <ul>
                    <li>Here’s how you win:</li>
                  </ul>
                  <ul>
                    <li>
                      Step 1: Score every wave as closely as possible to our
                      head critic, Michael Ciaramella.
                    </li>
                  </ul>
                  <ul>
                    <li>...That’s it.</li>
                  </ul>
                  <ul>
                    <li>
                      The person whose scores (on average) are closest to MC’s,
                      wins the ...Lost Surfboard quiver. It’s a completely
                      arbitrary performance metric, sure, but with free
                      surfboards on the line and no collateral required, are you
                      really in a position to argue?
                    </li>
                  </ul>
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
                      <ButtonSecondary onClick={handleEmailSave}>
                        Submit
                      </ButtonSecondary>
                    </div>
                  )}
                </SectionCopy>
              </SectionBlock>

              <SectionBlock id="competitors">
                <SectionTitle>Who are these “surfers”, anyway?</SectionTitle>
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

              <SectionBlock id="faq">
                <SectionTitle>FAQ and Other Dumb Questions</SectionTitle>
                <SectionCopy>
                  <h4>Why don't I surf like that?</h4>
                  <ul>
                    <li>Because you are on a wavestorm, kid.</li>
                  </ul>
                  <h4>Why don't I surf like that?</h4>
                  <ul>
                    <li>Because you are on a wavestorm, kid.</li>
                  </ul>
                  <h4>Why don't I surf like that?</h4>
                  <ul>
                    <li>Because you are on a wavestorm, kid.</li>
                  </ul>
                </SectionCopy>
              </SectionBlock>
            </MainSection>
          </Main>
          <Panel>
            <DesktopView>
              <StickyScroll>
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
