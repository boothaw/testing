import React, { useState, useEffect } from "react";

import Surf100Logo from "../../lib/assets/surf-100.png";

import { surfers_trestles_2020 } from "../../surfers";
// import { createPortal } from "react-dom";
// import Ifr from "../../components/iframe/index";

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
} from "./styles";

const EventPage = () => {
  const [height, setHeight] = useState(null);
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
            id: 108337,
          },
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
            6pm, Thursday August 6, California (PST) & 11am, Friday August 7,
            QLD/NSW/VIC (AEST)
          </div>
          {/* <div className="row">
            & at 11am, Friday July 24, QLD/NSW/Vic (AEST)
          </div> */}
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
          In Surf100, clips are scored out of 100 points (whole numbers only, no
          decimals). A decent wave might be worth 50 points, a solid wave is 70,
          and a barn-burner could be 90. For a surfer to earn 100 points on a
          clip, they better put your goddamn chin on the linoleum. Oh, and the
          “best” judge of the event will win a custom Mayhem/...Lost quiver.
        </SecondaryText>
        <ButtonSecondary
          onClick={() => window.location.replace("/event/#giveaway")}
        >
          More on that below.
        </ButtonSecondary>
      </>
    );
  };

  const renderScoring = (emailAddress) => {
    return (
      <IframeContainer
        style={{
          maxWidth: 875,
          width: "100%",
          height: 325,
          overflow: "auto",
        }}
      >
        <iframe
          id="scaled-frame"
          src={`https://bsview.s3-us-west-2.amazonaws.com/index_stab100.html?user=${emailAddress}`}
          frameBorder="no"
          allowtransparency="true"
          allowtullscreen="true"
        ></iframe>
      </IframeContainer>
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
          ...Lost Surfboard Giveaway
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

  // Random component
  const Completionist = () => <span>Start Watching!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft = {};
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
    console.log("time left", { timeLeft });
  };

  return (
    <>
      <Nav>
        <a href="/">
          <img src={Surf100Logo} />
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
            <EventDetails>{renderCTA()}</EventDetails>

            <div
              id="inplayer-108337"
              className="inplayer-paywall preview-frame"
            ></div>
            {renderScoring(email)}
            <div>
              {/* <ExpandButton
                onClick={() => window.location.replace("/event/#giveaway")}
              >
                Expand Scoring
              </ExpandButton> */}
            </div>

            <MobileNavBar>{renderNavMenu()}</MobileNavBar>
            <MobileView>
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
                      social distancing guidelines. San Clemente favorite sons
                      Kolohe Andino, Griffin Colapinto, and Ian Crane will
                      paddle out for a 100-minute waveriding demonstration at
                      Lower Trestles.
                    </p>
                    <p>
                      The surfers can ride as many waves as they want in the
                      100-minute session. Each wave will be considered a
                      separate “clip” that can be used in their final “section”.
                      Each section will consist of two clips—one right, one
                      left—which will be judged out of 100 points apiece, 200
                      points total. (See above for more info on judging.)
                    </p>
                    <p>
                      While negotiating a typical Lowers crowd, they’ll attempt
                      to capture the best two-wave (right + left) video clip in
                      the allotted time.
                    </p>
                    <p>
                      The best section (two clip total), according to the
                      internet, wins.
                    </p>
                    <p>
                      The show will be anchored with the no holds-barred team of
                      analysts and thought leaders, Dane Reynolds, Taylor Knox
                      and Selema Masekela.
                    </p>
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
                        onChange={(e) => setEmail(e.currentTarget.value)}
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
                <SectionTitle>Who are these “surfers”?</SectionTitle>
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
                      6pm, Thursday August 6, California (PST) & 11am, Friday
                      August 7, QLD/NSW/VIC (AEST){" "}
                    </p>{" "}
                  </FAQCard>

                  <FAQCard>
                    {" "}
                    <h4>Are there going to be more events?</h4>
                    <p>
                      Pending the success of the first event, we plan on
                      shooting this in different regions, globally.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    {" "}
                    <h4>Does it cost money to download the app?</h4>
                    <p>
                      There’s no app, all viewing takes place on the web
                      browser.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    {" "}
                    <h4>How long is the broadcast?</h4>
                    <p>
                      110 minutes. The 100 minute event plus some pre and post
                      show.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    {" "}
                    <h4>
                      I’m on a phone so only have the Safari browser, will I be
                      able to watch Surf100?
                    </h4>
                    <p>Yes.</p>
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
                      view full screen.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    <h4>Can I watch on one device and score on another?</h4>
                    <p>Yup, that’s the easiest way to do it.</p>
                  </FAQCard>

                  <FAQCard>
                    <h4>Can you watch more than once?</h4>
                    <p>
                      Yup, as part of your pass, you’ll be able to watch on
                      demand.
                    </p>
                  </FAQCard>

                  <FAQCard>
                    <h4>How do I pre-order the pay per view?</h4>
                    <p>
                      <a href="/event">Click here.</a>
                    </p>
                  </FAQCard>

                  <FAQCard>
                    <h4>Does it cost more to get the pay per view in HD.</h4>
                    <p>No.</p>
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
                    <h4>Does Dane Reynolds judge?</h4>
                    <p>No. He’s on commentary.</p>
                  </FAQCard>

                  <FAQCard>
                    <h4>What does the winner win?</h4>
                    <p>Bragging rights.</p>
                  </FAQCard>

                  <FAQCard>
                    <h4>
                      Is there a separate contest for the viewers who judge?
                    </h4>
                    <p>
                      We have our head critic, Mikey Ciaramella, reveal his
                      scores after our audience scores are locked. At the end of
                      the event, the judge with the same or nearest score to
                      Mikey will win a three-board Mayhem quiver.{" "}
                    </p>
                  </FAQCard>

                  <FAQCard>
                    <h4>Can we judge as a group?</h4>
                    <p>
                      No, singular judging only sorry. Everyone can judge
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
                    <h4>
                      What if I’m late to the screening? Do I start from the
                      start?
                    </h4>
                    <p>You’ll start mid-broadcast.</p>
                  </FAQCard>

                  <FAQCard>
                    <h4>Can I watch on my phone and judge at the same time?</h4>
                    <p>Yup. Your log-in will work on two devices.</p>
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
                      You don’t but our aim is to have consistent judging so we
                      hope you can so we can have as large a sample size as
                      possible. Also, missing a wave makes it significantly less
                      likely you’ll win the ...Lost quiver.
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

                  {/* </FAQCard> */}
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
      <Footer>
        <div>
          <h4>Have more questions? Contact Us.</h4>
          <a href="mailto: questions@surf100.tv">questions@surf100.tv</a>
        </div>
      </Footer>
    </>
  );
};

export default EventPage;
