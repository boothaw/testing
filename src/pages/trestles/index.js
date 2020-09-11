import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  NavBar,
  Banner,
  ContentContainer,
  Button,
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
  FaqContainer,
  FaqSection,
  ColumnOne,
  ColumnTwo,
  Footer,
  PageContainer,
  VidSection,
  NavSection,
  SorryBanner,
  KoloheBanner,
} from "./styles";

import Modal from "../../components/modal/Modal";
import useModal from "../../components/modal/useModal";

import kolohe from "../../lib/assets/Kolohe.png";
import griffin from "../../lib/assets/Griffin.png";
import ian from "../../lib/assets/Ian.png";
import dane from "../../lib/assets/Dane.png";
import selema from "../../lib/assets/Selema.png";
import taylor from "../../lib/assets/Taylor.png";
import s100white from "../../lib/assets/s100logowhite.png";
import s100dark from "../../lib/assets/s100logodark.png";
import insta from "../../lib/assets/insta.png";

const SplashPage = () => {
  const { isShowing, toggle } = useModal();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const emailRegistered = localStorage.getItem("SURF100.email");

    console.log("run run", emailRegistered);
    if (emailRegistered) {
      setEmail(emailRegistered);
      setIsRegistered(true);
    }

    if (window.InplayerPaywall) {
      var paywall = new window.InplayerPaywall(
        "23b08bc0-c50c-4bb1-8606-6a2db940919e",
        [
          {
            id: 109708,
          },
        ]
      );

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  return (
    <PageContainer>
      <NavSection>
        {" "}
        <Banner></Banner>
        <NavBar>
          <a href="/">
            <img src={s100dark} />
          </a>
          <div>
            <Button href="/event">Current Scoring Page</Button>
          </div>
        </NavBar>
      </NavSection>
      <KoloheBanner>
        <a href="https://stabmag.com/news/kolohe-andino-wins-surf100-at-lower-trestles/">
          Kolohe Andino wins inaugural Surf100 at Lowers
        </a>
      </KoloheBanner>

      <ContentContainer>
        <TitleSection>
          <h2>An audience-judged, 100-minute wave riding demonstration.</h2>
          <h2>6pm (PST) August 6, 2020</h2>
        </TitleSection>
        <VidSection>
          <VidContainer>
            {" "}
            <ReactPlayer
              className="plyr"
              url="https://youtu.be/F-uIHXwf87I"
              controls="true"
              width="100%"
            />
          </VidContainer>
        </VidSection>
      </ContentContainer>
      <Featuring>
        <ContentContainer>
          <h2>Featuring:</h2>
          <HeadShotContainer>
            <ProfileContainer>
              <HeadShot src={kolohe}></HeadShot>
              <h5>Kolohe Andino</h5>
              <p>(in black)</p>
            </ProfileContainer>
            <ProfileContainer>
              <HeadShot src={griffin}></HeadShot>
              <h5>Griffin Colapinto</h5>
              <p>(in orange)</p>
            </ProfileContainer>
            <ProfileContainer>
              <HeadShot src={ian}></HeadShot>
              <h5>Ian Crane</h5>
              <p>(in blue)</p>
            </ProfileContainer>
          </HeadShotContainer>
        </ContentContainer>
      </Featuring>
      <HostedSection>
        <ContentContainer>
          <h2>Hosted by:</h2>
          <HeadShotContainer>
            <ProfileContainer>
              <HeadShot src={dane}></HeadShot>
              <h5>Dane Reynolds</h5>
            </ProfileContainer>
            <ProfileContainer>
              <HeadShot src={selema}></HeadShot>
              <h5>Selema Masekela</h5>
            </ProfileContainer>
            <ProfileContainer>
              <HeadShot src={taylor}></HeadShot>
              <h5>Taylor Knox</h5>
            </ProfileContainer>
          </HeadShotContainer>
        </ContentContainer>
      </HostedSection>

      <ContentContainer>
        <Description>
          <h2>What is Surf 100?</h2>
          <ul>
            <p>
              Surf 100 is a waveriding exposition that takes place over a
              single, 100-minute period and is judged live, at a later date, by
              the internet. All of this is done following social distancing
              guidelines. San Clemente favorite sons Kolohe Andino, Griffin
              Colapinto, and Ian Crane will paddle out for a 100-minute
              waveriding demonstration at Lower Trestles.
            </p>
            <p>
              The surfers can ride as many waves as they want in the 100-minute
              session. Each wave will be considered a separate “clip” that can
              be used in their final “section”. Each section will consist of two
              clips—one right, one left—which will be judged out of 100 points
              apiece, 200 points total. (See above for more info on judging.)
            </p>
            <p>
              While negotiating a typical Lowers crowd, they’ll attempt to
              capture the best two-wave (right + left) video clip in the
              allotted time.
            </p>
            <p>
              The best section (two clip total), according to the internet,
              wins.
            </p>
            <p>
              The show will be anchored with the no holds-barred team of
              analysts and thought leaders, Dane Reynolds, Taylor Knox and
              Selema Masekela.
            </p>
          </ul>
        </Description>
      </ContentContainer>
      <ShowTime>
        <ShowContent>
          <h2>Show Time:</h2>
          <TimeUs>
            <p>6pm, Thursday August 6, California (PST)</p>
          </TimeUs>
          <TimeOz>
            <p>11am, Friday August 7, QLD/NSW/VIC (AEST)</p>
          </TimeOz>
        </ShowContent>
      </ShowTime>
      <FaqSection id="faq">
        <h2>FAQs</h2>
        <FaqContainer>
          <ColumnOne>
            <h4>When is the event live?</h4>
            <p>
              6pm, Thursday August 6, California (PST) & 11am, Friday August 7,
              QLD/NSW/VIC (AEST){" "}
            </p>

            <h4>Are there going to be more events?</h4>
            <p>
              Pending the success of the first event, we plan on shooting this
              in different regions, globally.
            </p>

            <h4>Does it cost money to download the app?</h4>
            <p>There’s no app, all viewing takes place on the web browser.</p>

            <h4>How long is the broadcast?</h4>
            <p>
              110 minutes. The 100 minute event plus some pre and post show.
            </p>

            <h4>
              I’m on a phone so only have the Safari browser, will I be able to
              watch Surf 100?
            </h4>
            <p>Yes.</p>

            <h4>Why are you showing the event after the fact? And not live?</h4>
            <p>
              Because we wanted to respect social distancing rules which didn’t
              allow judges and commentary on the beach.
            </p>

            <h4>
              Do you allow a split screen so I can watch and judge? I only have
              one screen.
            </h4>
            <p>
              You can watch and score at the same time. Obvs, you can’t view
              full screen.
            </p>

            <h4>Can I watch on one device and score on another?</h4>
            <p>Yup, that’s the easiest way to do it.</p>

            <h4>Can you watch more than once?</h4>
            <p>Yup, as part of your pass, you’ll be able to watch on demand.</p>

            <h4>How do I pre-order the pay per view?</h4>
            <p>
              <a href="/trestles">Click here.</a>
            </p>

            <h4>Does it cost more to get the pay per view in HD.</h4>
            <p>No.</p>

            <h4>
              Oh, and does this $USD14,99 get me the season or just one show?
            </h4>
            <p>Just this one event.</p>

            <h4>Does the pay per view thing work on a Samsung etc?</h4>
            <p>Android works.</p>

            <h4>Can I get a refund if I don’t like the show?</h4>
            <p>You can definitely ask.</p>

            <h4>What if I can’t afford the pay per view?</h4>
            <p>
              Email us at{" "}
              <a href="mailto: surf100@stabmag.com">surf100@stabmag.com</a>,
              tell us your name, age, where you’re from, why you can’t pay and
              we’ll send you a code.
            </p>
          </ColumnOne>
          <ColumnTwo>
            <h4>Does Dane Reynolds judge?</h4>
            <p>No. He’s on commentary.</p>

            <h4>What does the winner win?</h4>
            <p>Bragging rights.</p>

            <h4>Is there a separate contest for the viewers who judge?</h4>
            <p>
              We have our head critic, Mikey Ciaramella, reveal his scores after
              our audience scores are locked. At the end of the event, the judge
              with the same or nearest score to Mikey will win a three-board
              Mayhem quiver.{" "}
            </p>

            <h4>Can we judge as a group?</h4>
            <p>
              No, singular judging only sorry. Everyone can judge individually.
            </p>

            <h4>What do I do if my video doesn’t work?</h4>
            <p>
              There’s a help pop-up box on the site. Christian, a new and
              athletic surfer from Virginia, will help you through it.
            </p>

            <h4>
              What if I’m late to the screening? Do I start from the start?
            </h4>
            <p>You’ll start mid-broadcast.</p>

            <h4>Can I watch on my phone and judge at the same time?</h4>
            <p>Yup. Your log-in will work on two devices.</p>

            <h4>Can I watch it on my smart TV?</h4>
            <p>
              Yup but the moment you share on your TV means you’ll crop out the
              scoring software.
            </p>

            <h4>Can I rewatch waves to make sure I get the right score?</h4>
            <p>We’ll show rewinds of every wave.</p>

            <h4>Do I have to judge every wave?</h4>
            <p>
              You don’t but our aim is to have consistent judging so we hope you
              can so we can have as large a sample size as possible. Also,
              missing a wave makes it significantly less likely you’ll win the
              ...Lost quiver.
            </p>

            <h4>
              Will I know who is winning and what scores are needed like a
              normal surf comp?
            </h4>
            <p>
              Yup. The audience is the only judge and the average score will be
              featured on screen.
            </p>

            <h4>What if my computer cuts out?</h4>
            <p>
              That’s a long piece of string, sugar. That one is on you. The
              broadcast will keep on running.
            </p>
          </ColumnTwo>
        </FaqContainer>
      </FaqSection>
      <div id="inplayer-109708" class="inplayer-paywall"></div>
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
    </PageContainer>
  );
};

export default SplashPage;
