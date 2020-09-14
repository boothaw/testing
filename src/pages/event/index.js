import React, { useState, useEffect } from "react";

import Surf100Logo from "../../lib/assets/surf-100.png";

import { surfers_trestles_2020 } from "../../surfers";

import s100white from "../../lib/assets/s100logowhite.png";
import s100dark from "../../lib/assets/s100logodark.png";

import insta from "../../lib/assets/insta.png";

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
  IframeContainerSmall,
  IframeContainerBig,
  S100Logo,
  BodyContainer,
  ExpandButton,
  Title,
  CompetitorRow,
  CompetitorCard,
  Input,
  SocialContainer,
  DesktopNavBar,
  MobileNavBar,
  FAQCard,
  Footer,
  SeeMoreButton,
  SorryBanner,
  KoloheBanner,
  Banner,
} from "./styles";

const EventPage = () => {
  const [activeTab, setActiveTab] = useState("Scoring");
  const [loading, setLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState("");
  const [isShowing, setIsShowing] = useState(false);

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
            id: 121240,
          },
        ]
      );

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  const toggle = () => {
    console.log("showing status", isShowing);
    setIsShowing(!isShowing);
  };

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
            <i className="fa fa-clock-o" aria-hidden="true"></i>6 pm, Thursday
            September 17, California (PST)
          </div>
          <div className="row">
            <i className="fa fa-clock-o" aria-hidden="true"></i>11 am, Friday
            September 18, QLD/NSW/VIC (AEST)
          </div>
          <div className="row">
            <i className="fa fa-clock-o" aria-hidden="true"></i>9 am Friday
            September 18 Western Australia (AWST)
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
          </div>
        </div>
        <SecondaryText>
          Clips are scored out of 100 points, so take what you’d give a wave out
          of 10 and move the decimal one to the right. It’s not rocket surgery.
        </SecondaryText>
        <SeeMoreButton href="/event/#giveaway">
          Tap your email below to be entered.
        </SeeMoreButton>
      </>
    );
  };

  const renderScoring = (email) => {
    if (isShowing) {
      return (
        <IframeContainerBig
          style={{
            maxWidth: 875,
            width: "100%",
            height: 925,
            overflow: "auto",
          }}
        >
          <iframe
            id="scaled-frame"
            src={`https://bsview.s3-us-west-2.amazonaws.com/index_stab100.html?user=${email}`}
            frameBorder="no"
            allowtransparency="true"
            allowtullscreen="true"
          ></iframe>
        </IframeContainerBig>
      );
    }
    return (
      <IframeContainerSmall
        style={{
          maxWidth: 875,
          width: "100%",
          height: 350,
          overflow: "auto",
        }}
      >
        <iframe
          id="scaled-frame"
          src={`https://bsview.s3-us-west-2.amazonaws.com/index_stab100.html?user=${email}`}
          frameBorder="no"
          allowtransparency="true"
          allowtullscreen="true"
        ></iframe>
      </IframeContainerSmall>
    );
  };

  const renderNavMenu = () => {
    return (
      <MenuBar>
        <MenuItem
          href="/event/#concept"
          onClick={() => setActiveTab("Concept")}
          active={activeTab === "Concept"}
        >
          What is SURF 100?
        </MenuItem>

        <MenuItem
          href="/event/#giveaway"
          onClick={() => setActiveTab("Giveaway")}
          active={activeTab === "Giveaway"}
        >
          Surfboard Giveaway
        </MenuItem>
        <MenuItem
          href="/event/#competitors"
          onClick={() => setActiveTab("Competitors")}
          active={activeTab === "Competitors"}
        >
          Who are these “surfers”?
        </MenuItem>
        <MenuItem
          href="/event/#faq"
          onClick={() => setActiveTab("FAQ")}
          active={activeTab === "FAQ"}
        >
          FAQs
        </MenuItem>
      </MenuBar>
    );
  };

  return (
    <>
      <Nav>
        <a href="/">
          <img src={s100dark} />
        </a>
        <DesktopNavBar>{renderNavMenu()}</DesktopNavBar>
        <SocialContainer>
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
        </SocialContainer>
      </Nav>
      <PageContainer>
        <BodyContainer>
          <Main>
            <h4>TESTING SITE TESTING SITE TESTING SITE </h4>

            <EventDetails>{renderCTA()}</EventDetails>

            {/* <div
              id="inplayer-108337"
              className="inplayer-paywall preview-frame"
            ></div> */}

            <div id="inplayer-121240" className="inplayer-paywall"></div>

            <div>
              <ExpandButton onClick={toggle}>
                {isShowing ? "Collapse Scoring" : "Expand Scoring"}
              </ExpandButton>
              {renderScoring()}
            </div>

            <MobileNavBar>{renderNavMenu()}</MobileNavBar>
            <MobileView>
              {" "}
              <EventDetails>{renderGiveAway()}</EventDetails>
            </MobileView>
            <MainSection>
              <SectionBlock id="concept">
                <SectionTitle>What is SURF 100?</SectionTitle>
                <SectionCopy>
                  <ul>
                    <p>
                      Surf 100 is a waveriding exposition that takes place over
                      a single, 100-minute period and is judged live, at a later
                      date, by the internet. All of this is done following
                      social distancing guidelines. In this edition, West Oz
                      mainstays Jack Robinson, Jay Davies, Jacob Willcox, and
                      Kael Walsh will paddle out for a 100-minute waveriding
                      demonstration at North Point.
                    </p>
                    <p>
                      While negotiating a typical North Point crowd, the surfers
                      can ride as many waves as they want in the 100-minute
                      session. Each wave will be scored by the audience out of
                      100 points apiece. The surfer with the best two-wave
                      total, according to the internet, wins.
                    </p>
                    <p>
                      The show will be anchored by the no holds-barred team of
                      analysts and thought leaders, Dane Reynolds, Selema
                      Masekela, and Yadin Nicol.
                    </p>
                  </ul>
                </SectionCopy>
              </SectionBlock>
              <SectionBlock id="giveaway">
                <SectionTitle>Surfboard Giveaway</SectionTitle>
                <SectionCopy>
                  <ul>
                    <li>
                      All four Surf100 competitors ride for a different
                      surfboard brand, including: Channel Islands, DHD, Arakawa,
                      and Chilli.
                    </li>
                  </ul>
                  <ul>
                    <li>
                      This time, the best Surf100 judge will win a three-board
                      quiver from the winning surfer’s shaper.
                    </li>
                  </ul>

                  <ul>
                    <li>Here’s how you win:</li>
                  </ul>
                  <ul>
                    <li>
                      Step 1: Score every wave as you see fit (Note: you NO
                      LONGER have to score throwaway waves.)
                    </li>
                  </ul>
                  <ul>
                    <li>...That’s it.</li>
                  </ul>
                  <ul>
                    <li>
                      The person whose scores are closest to the group average
                      on the winning surfer’s top two waves will win the three
                      boards.
                    </li>
                  </ul>
                  {isRegistered ? (
                    <div>
                      {console.log(email)}
                      <h3>Registration Complete!</h3>
                    </div>
                  ) : (
                    <div>
                      <form>
                        <Input
                          onChange={(e) => setEmail(e.currentTarget.value)}
                          value={email}
                          placeholder="Email address"
                        />

                        <ButtonSecondary onClick={handleEmailSave}>
                          Submit
                        </ButtonSecondary>
                      </form>
                    </div>
                  )}
                </SectionCopy>
              </SectionBlock>

              <SectionBlock id="competitors">
                <SectionTitle>Who are these so-called “surfers”?</SectionTitle>
                <CompetitorRow>
                  {surfers_trestles_2020.map((surfer) => (
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
                <SectionTitle>FAQs</SectionTitle>
                <SectionCopy>
                  <FAQCard>
                    <h4>When is the event live?</h4>
                    <p>
                      6pm, Thursday September 17, California (PST) & 11am,
                      Friday September 18, QLD/NSW/VIC (AEST)
                    </p>
                  </FAQCard>

                  <FAQCard>
                    {" "}
                    <h4>How long is the broadcast?</h4>
                    <p>
                      110 minutes. The 100 minute event (played in “real-time”)
                      plus some pre and post show.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    {" "}
                    <h4>
                      Why are you showing the event after the fact? And not
                      live?
                    </h4>
                    <p>
                      Because we wanted to respect social distancing rules which
                      didn’t allow judges and commentary on the beach.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    {" "}
                    <h4>
                      Do you allow a split screen so I can watch and judge? I
                      only have one screen.
                    </h4>
                    <p>
                      You can watch and score at the same time. Obvs, you can’t
                      view full screen
                    </p>
                  </FAQCard>

                  <FAQCard>
                    {" "}
                    <h4>Can I watch on one device and score on another?</h4>
                    <p>Yup, that’s the easiest way to do it.</p>
                  </FAQCard>

                  <FAQCard>
                    {" "}
                    <h4>Can you watch more than once?</h4>
                    <p>
                      Yup, as part of your pass, you’ll be able to watch on
                      demand.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    {" "}
                    <h4>How do I pre-order the pay per view?</h4>
                    <p>
                      <a href="/event">Click here.</a>
                    </p>
                  </FAQCard>

                  <FAQCard>
                    <h4>
                      Oh, and does this $USD14,99 get me the season or just one
                      show?
                    </h4>
                    <p>Just this one event.</p>
                  </FAQCard>

                  <FAQCard>
                    <h4>Does the pay per view thing work on a Samsung etc?</h4>
                    <p>Android works.</p>
                  </FAQCard>

                  <FAQCard>
                    <h4>Can I get a refund if I don’t like the show?</h4>
                    <p>You can definitely ask.</p>
                  </FAQCard>

                  <FAQCard>
                    <h4>What if I can’t afford the pay per view?</h4>
                    <p>
                      Email us at{" "}
                      <a href="mailto: surf100@stabmag.com">
                        surf100@stabmag.com
                      </a>
                      , tell us your name, age, where you’re from, why you can’t
                      pay and we’ll send you a code.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    <h4>Does Dane Reynolds judge?</h4>
                    <p>No. He’s on commentary.</p>
                  </FAQCard>

                  <FAQCard>
                    <h4>What does the winner win?</h4>
                    <p>Bragging rights.</p>
                  </FAQCard>

                  <FAQCard>
                    <h4>Can we judge as a group?</h4>
                    <p>
                      No, singular judging only, sorry. Everyone can judge
                      individually.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    <h4>What do I do if my video doesn’t work?</h4>
                    <p>
                      There’s a help pop-up box on the site. Christian, a new
                      and athletic surfer from Virginia, will help you through
                      it.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    <h4>Does Dane Reynolds judge?</h4>
                    <p>No. He’s on commentary.</p>
                  </FAQCard>

                  <FAQCard>
                    <h4>
                      What if I’m late to the screening? Do I start from the
                      start?
                    </h4>
                    <p>You’ll start mid-broadcast.</p>
                  </FAQCard>

                  <FAQCard>
                    <h4>Can I watch it on my smart TV?</h4>
                    <p>
                      Yup but the moment you share on your TV means you’ll crop
                      out the scoring software.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    <h4>
                      Can I rewatch waves to make sure I get the right score?
                    </h4>
                    <p>We’ll show rewinds of every wave.</p>
                  </FAQCard>

                  <FAQCard>
                    <h4>Do I have to judge every wave?</h4>
                    <p>
                      Not the “irrelevant waves” with insignificant scores. But
                      every wave of note you will have to score.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    <h4>
                      Will I know who is winning and what scores are needed like
                      a normal surf comp?
                    </h4>
                    <p>
                      Yup. The audience is the only judge and the average score
                      will be featured on screen.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    <h4>What if my computer cuts out?</h4>
                    <p>
                      That’s a long piece of string, sugar. That one is on you.
                      The broadcast will keep on running.
                    </p>
                  </FAQCard>
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
      {/* <SorryBanner>Times are tough. If you want to watch and can't swing it, email us with your name, age and a bit about yourself.</SorryBanner> */}
      <KoloheBanner>
        <a href="/trestles">Surf 100 - Trestles</a>
      </KoloheBanner>
      <Footer>
        <a href="/">
          <img src={s100white} />
        </a>
        <div>
          <h4>Have more questions?</h4>
          <a href="/contact">Contact Us</a>
        </div>
        <a target="_blank" href="https://www.instagram.com/surf100.tv/?hl=en">
          <img src={insta} />
        </a>
      </Footer>
    </>
  );
};

export default EventPage;
