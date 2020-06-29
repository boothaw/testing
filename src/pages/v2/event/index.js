import React, { useState } from "react";

import VansLogo from "../../../lib/assets/vans.png";
import MonsterLogo from "../../../lib/assets/monster.png";
import HostImage from "../../../lib/assets/urbnsurf_logo.png";

import StabLogo from "../../../lib/assets/stab-logo.svg";
import Surf100Logo from "../../../lib/assets/surf-100.png";

import { Tooltip } from "antd";

import {
  surfers_melbourne_2020,
  ladybirds_melbourne_2020
} from "../../../surfers";

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
  Title,
  SubTitle,
  SectionTitle,
  SecondaryText,
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
  S100Logo
} from "./styles";

const EventPage = () => {
  const [activeTab, setActiveTab] = useState("Scoring");

  const iframe =
    '<iframe width="100%" height="100%" id="scaled-frame" src="https://bsview.s3-us-west-2.amazonaws.com/index_stab100.html" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>';

  const renderCTA = () => {
    return (
      <>
        <Title>Surf 100</Title>

        {/* <div className="host-banner">
          <div className="hosts100">
            <img src={Surf100Logo} />
          </div>
        </div> */}

        <SubTitle>Hosted...</SubTitle>
        <div className="dates-and-price">
          <div className="row">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            Sat. 21 March 2020 11am - 9:00pm AEDT
          </div>
          <div className="row">
            <i class="fa fa-ticket" aria-hidden="true"></i>
            From $14.99 - $127.20
          </div>
        </div>
        {/* <Button mb="12px" onClick={() => window.open("", "_blank")}>
          Log In
        </Button> */}
        <ButtonSecondary onClick={() => window.location.replace("/watch")}>
          Purchase Pay-Per-View
        </ButtonSecondary>
      </>
    );
  };

  const renderHostDetails = () => {
    return (
      <>
        <div className="host-banner">
          <div className="host">
            {" "}
            {/* need permission or better logo for lost img here */}
            <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/10517675_10152745041342688_1556850807273125968_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=8s_gIcQNuGIAX8g4ija&_nc_ht=scontent-sea1-1.xx&oh=5c6de695163248a8e5cc4e8591429489&oe=5F1AABC6" />{" "}
          </div>
          <div>
            {/* <label>Event Info</label> */}
            <Title>Free Surfboard?</Title>
          </div>
        </div>
        <SecondaryText>
          {/* Located just 5 minutes from Melbourne airport and 23 minutes from
          Melbourne CBD, Australia’s first-ever surf park is now open at 309
          Melrose Drive, Tullamarine. */}
          The person with the closest votes to our head judge will get a free
          Mayhem surfboard! We just gotta know who you are to give it to you.
        </SecondaryText>
        <ButtonSecondary onClick={() => window.location.replace("/watch")}>
          Log In
        </ButtonSecondary>
      </>
    );
  };

  const Iframe = () => {
    return <IframeContainer dangerouslySetInnerHTML={{ __html: iframe }} />;
  };

  return (
    <>
      {/* <SorryBanner>
        Event Cancelled. Expect your refund to process within the next 36 hours
      </SorryBanner> */}
      <Nav>
        <img src={Surf100Logo} />
        <div>
          <a
            style={{ marginLeft: "8px", fontSize: "18px" }}
            target="_blank"
            href="https://www.facebook.com/StabSurfMagazine/"
          >
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            style={{ marginLeft: "8px", fontSize: "18px" }}
            target="_blank"
            href="https://www.facebook.com/StabSurfMagazine/"
          >
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>

          <a
            style={{ marginLeft: "8px", fontSize: "18px" }}
            target="_blank"
            href="https://twitter.com/stabmagazine?lang=en"
          >
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </Nav>
      <PageContainer>
        <Main>
          {/* <EventBanner /> */}
          <div>{Iframe()}</div>
          <MenuBar>
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
            <MenuItem
              href="/#sponsor"
              onClick={() => setActiveTab("Sponsor")}
              active={activeTab === "Sponsor"}
            >
              Sponsored by
            </MenuItem>
            {/* <MenuItem
              href="/#schedule"
              onClick={() => setActiveTab("Schedule")}
              active={activeTab === "Schedule"}
            >
              Schedule
            </MenuItem> */}
            <MenuItem
              href="/#competitors"
              onClick={() => setActiveTab("Competitors")}
              active={activeTab === "Competitors"}
            >
              Competitors
            </MenuItem>
          </MenuBar>
          <MobileView>
            <EventDetails>{renderCTA()}</EventDetails>
            <EventDetails>{renderHostDetails()}</EventDetails>
          </MobileView>
          <MainSection>
            <SectionBlock id="description">
              <SectionTitle>Description</SectionTitle>
              <SectionCopy>
                <ul>
                  <li>
                    Do we want an event description right here ?? Each one of
                    the surfers gets 100 mins to surf their home break and you
                    get to judge them. Simple, right? Each one of the surfers
                    gets 100 mins to surf their home break and you get to judge
                    them. Simple, right?
                  </li>
                </ul>
              </SectionCopy>
            </SectionBlock>

            <SectionBlock id="scoring">
              <SectionTitle>How to score a wave in Surf100:</SectionTitle>
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
                    Step 2: Consider the clip's quality relative to other clips
                    from the session.
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
                    So, if you think a clip is a 5/10, it would be a 25/50 here.
                  </li>
                </ul>
                <ul>
                  <li>Capiche?</li>
                </ul>
              </SectionCopy>
            </SectionBlock>

            <SectionBlock id="sponsor">
              <SectionTitle>Sponsored By</SectionTitle>
              <SponsorsRow>
                <a href="https://stabmag.com/" target="_blank">
                  <SponsorCard>
                    <img src={StabLogo} />
                  </SponsorCard>
                </a>
                {/* <a href="https://www.monsterenergy.com/" target="_blank">
                  <SponsorCard large>
                    <img src={MonsterLogo} />
                  </SponsorCard>
                </a> */}
              </SponsorsRow>
            </SectionBlock>

            {/* <SectionBlock id="schedule">
              <SectionTitle>Schedule</SectionTitle> */}
            {/* <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>RIGHTS</label>
                    <label className="heat">Heat 1</label>
                  </div>
                  <div className="avatars">
                    <Tooltip title="Ian Crane">
                      <img src="https://i.ibb.co/r7HsRPN/Ian-Crane.png" />
                    </Tooltip>
                    <Tooltip title="Tanner Guduaskas">
                      <img src="https://i.ibb.co/P43VmGQ/Tanner-Gudauskas.png" />
                    </Tooltip>
                    <Tooltip title="Levi Slawson">
                      <img src="https://i.ibb.co/D9ZQhLb/Levi-Slawson.png" />
                    </Tooltip>
                    <Tooltip title="Noah Wegrich">
                      <img src="https://i.ibb.co/JB7dhHQ/Noah-Wegrich.png" />
                    </Tooltip>
                    <Tooltip title="Eli Hanneman">
                      <img src="https://i.ibb.co/0ZJT4XT/Eli-Hanneman.png" />
                    </Tooltip>
                    <Tooltip title="Kael Walsh">
                      <img src="https://i.ibb.co/KF4P5n7/Kael-Walsh.png" />
                    </Tooltip>
                    <Tooltip title="Balaram Stack">
                      <img src="https://i.ibb.co/RyzGyhS/Balaram-Stack.png" />
                    </Tooltip>
                  </div>
                </div>
                <h5>TBD</h5>
                <p>
                  Ian Crane, Tanner Guduaskas, Levi Slawson, Noah Wegrich, Eli
                  Hanneman, Kael Walsh, Balaram Stack
                </p>
              </ScheduleCard>
              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>RIGHTS</label>
                    <label className="heat">Heat 2</label>
                  </div>
                  <div className="avatars">
                    <Tooltip title="Mason Ho">
                      <img src="https://i.ibb.co/N6RVYPq/Mason-Ho.png" />
                    </Tooltip>
                    <Tooltip title="Parker Coffin">
                      <img src="https://i.ibb.co/QrGwvKC/Parker-Coffin.png" />
                    </Tooltip>
                    <Tooltip title="Matt Meola">
                      <img src="https://i.ibb.co/C2862jd/Matt-Meola.png" />
                    </Tooltip>
                    <Tooltip title="Kyuss King">
                      <img src="https://i.ibb.co/xDZ3g27/Kyuss-King.png" />
                    </Tooltip>
                    <Tooltip title="Jett Schilling">
                      <img src="https://i.ibb.co/q1WMXLQ/Jett-Schilling.png" />
                    </Tooltip>
                    <Tooltip title="Kevin Shulz">
                      <img src="https://i.ibb.co/TYMcKkH/Kevin-Shulz.png" />
                    </Tooltip>
                    <Tooltip title="Eithan Osbourne">
                      <img src="https://i.ibb.co/yBnY4sN/Eithan-Osbourne.png" />
                    </Tooltip>
                    <Tooltip title="Eric Geiselman">
                      <img src="https://i.ibb.co/yBx29c9/Eric-Geiselman.png" />
                    </Tooltip>
                  </div>
                </div>
                <h5>TBD</h5>
                <p>
                  Mason Ho, Parker Coffin, Matt Meola, Kyuss King, Jett
                  Schilling, Kevin Shulz, Eithan Osbourne, Eric Geiselman
                </p>
              </ScheduleCard>
              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>RIGHTS</label>
                    <label className="heat">Heat 3</label>
                  </div>
                  <div className="avatars">
                    <Tooltip title="Dion Agius">
                      <img src="https://i.ibb.co/xsYWC6w/Dion-Agius.png" />
                    </Tooltip>
                    <Tooltip title="Harry Bryant">
                      <img src="https://i.ibb.co/DWKxDZB/Harry-Bryant.png" />
                    </Tooltip>
                    <Tooltip title="Creed McTaggart">
                      <img src="https://i.ibb.co/z4VHkVX/Creed-Mc-Taggart.png" />
                    </Tooltip>
                    <Tooltip title="Wade Goodall">
                      <img src="https://i.ibb.co/ydDbSv3/Wade-Goodall.png" />
                    </Tooltip>
                    <Tooltip title="Brendon Gibbens">
                      <img src="https://i.ibb.co/n8GSTFg/Brendon-Gibbens.png" />
                    </Tooltip>
                    <Tooltip title="Shaun Manners">
                      <img src="https://i.ibb.co/dLBfT6j/Shaun-Manners.png" />
                    </Tooltip>
                    <Tooltip title="Coby Perkovich">
                      <img src="https://i.ibb.co/RQQ1tmD/Coby-Perkovich.png" />
                    </Tooltip>
                    <Tooltip title="Noa Deane">
                      <img src="https://i.ibb.co/zQR57M6/Noa-Deane.png" />
                    </Tooltip>
                  </div>
                </div>
                <h5>TBD</h5>
                <p>
                  Dion Agius, Harry Bryant, Creed McTaggart, Wade Goodall,
                  Brendon Gibbens, Shaun Manners, Coby Perkovich, Noa Deane
                </p>
              </ScheduleCard>
              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>LEFTS</label>
                    <label className="heat">Heat 1</label>
                  </div>
                  <div className="avatars">
                    <Tooltip title="Ian Crane">
                      <img src="https://i.ibb.co/r7HsRPN/Ian-Crane.png" />
                    </Tooltip>
                    <Tooltip title="Tanner Guduaskas">
                      <img src="https://i.ibb.co/P43VmGQ/Tanner-Gudauskas.png" />
                    </Tooltip>
                    <Tooltip title="Levi Slawson">
                      <img src="https://i.ibb.co/D9ZQhLb/Levi-Slawson.png" />
                    </Tooltip>
                    <Tooltip title="Noah Wegrich">
                      <img src="https://i.ibb.co/JB7dhHQ/Noah-Wegrich.png" />
                    </Tooltip>
                    <Tooltip title="Eli Hanneman">
                      <img src="https://i.ibb.co/0ZJT4XT/Eli-Hanneman.png" />
                    </Tooltip>
                    <Tooltip title="Kael Walsh">
                      <img src="https://i.ibb.co/KF4P5n7/Kael-Walsh.png" />
                    </Tooltip>
                    <Tooltip title="Balaram Stack">
                      <img src="https://i.ibb.co/RyzGyhS/Balaram-Stack.png" />
                    </Tooltip>
                  </div>
                </div>
                <h5>TBD</h5>
                <p>
                  Ian Crane, Tanner Guduaskas, Levi Slawson, Noah Wegrich, Eli
                  Hanneman, Kael Walsh, Balaram Stack
                </p>
              </ScheduleCard>
              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>LEFTS</label>
                    <label className="heat">Heat 2</label>
                  </div>
                  <div className="avatars">
                    <Tooltip title="Mason Ho">
                      <img src="https://i.ibb.co/N6RVYPq/Mason-Ho.png" />
                    </Tooltip>
                    <Tooltip title="Parker Coffin">
                      <img src="https://i.ibb.co/QrGwvKC/Parker-Coffin.png" />
                    </Tooltip>
                    <Tooltip title="Matt Meola">
                      <img src="https://i.ibb.co/C2862jd/Matt-Meola.png" />
                    </Tooltip>
                    <Tooltip title="Kyuss King">
                      <img src="https://i.ibb.co/xDZ3g27/Kyuss-King.png" />
                    </Tooltip>
                    <Tooltip title="Jett Schilling">
                      <img src="https://i.ibb.co/q1WMXLQ/Jett-Schilling.png" />
                    </Tooltip>
                    <Tooltip title="Kevin Shulz">
                      <img src="https://i.ibb.co/TYMcKkH/Kevin-Shulz.png" />
                    </Tooltip>
                    <Tooltip title="Eithan Osbourne">
                      <img src="https://i.ibb.co/yBnY4sN/Eithan-Osbourne.png" />
                    </Tooltip>
                    <Tooltip title="Eric Geiselman">
                      <img src="https://i.ibb.co/yBx29c9/Eric-Geiselman.png" />
                    </Tooltip>
                  </div>
                </div>
                <h5>TBD</h5>
                <p>
                  Mason Ho, Parker Coffin, Matt Meola, Kyuss King, Jett
                  Schilling, Kevin Shulz, Eithan Osbourne, Eric Geiselman
                </p>
              </ScheduleCard>
              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>LEFTS</label>
                    <label className="heat">Heat 3</label>
                  </div>
                  <div className="avatars">
                    <Tooltip title="Dion Agius">
                      <img src="https://i.ibb.co/xsYWC6w/Dion-Agius.png" />
                    </Tooltip>
                    <Tooltip title="Harry Bryant">
                      <img src="https://i.ibb.co/DWKxDZB/Harry-Bryant.png" />
                    </Tooltip>
                    <Tooltip title="Creed McTaggart">
                      <img src="https://i.ibb.co/z4VHkVX/Creed-Mc-Taggart.png" />
                    </Tooltip>
                    <Tooltip title="Wade Goodall">
                      <img src="https://i.ibb.co/ydDbSv3/Wade-Goodall.png" />
                    </Tooltip>
                    <Tooltip title="Brendon Gibbens">
                      <img src="https://i.ibb.co/n8GSTFg/Brendon-Gibbens.png" />
                    </Tooltip>
                    <Tooltip title="Shaun Manners">
                      <img src="https://i.ibb.co/dLBfT6j/Shaun-Manners.png" />
                    </Tooltip>
                    <Tooltip title="Coby Perkovich">
                      <img src="https://i.ibb.co/RQQ1tmD/Coby-Perkovich.png" />
                    </Tooltip>
                    <Tooltip title="Noa Deane">
                      <img src="https://i.ibb.co/zQR57M6/Noa-Deane.png" />
                    </Tooltip>
                  </div>
                </div>
                <h5>TBD</h5>
                <p>
                  Dion Agius, Harry Bryant, Creed McTaggart, Wade Goodall,
                  Brendon Gibbens, Shaun Manners, Coby Perkovich, Noa Deane
                </p>
              </ScheduleCard>
              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>RIGHTS</label>
                    <label className="heat">Ladybirds</label>
                  </div>
                  <div className="avatars">
                    <Tooltip title="Sierra Kerr">
                      <img src="https://i.ibb.co/qYDGxGY/Sierra-Kerr.png" />
                    </Tooltip>
                    <Tooltip title="Caitlin Simmers">
                      <img src="https://i.ibb.co/XWbpxMv/Caity-Simmers.png" />
                    </Tooltip>
                    <Tooltip title="Quincy Symonds">
                      <img src="https://i.ibb.co/jbgvC7r/Quincy-Symonds.png" />
                    </Tooltip>
                    <Tooltip title="Bella Kenworthy">
                      <img src="https://i.ibb.co/GJhqNFL/Bella-Kenworthy.png" />
                    </Tooltip>
                  </div>
                </div>
                <h5>TBD</h5>
                <p>
                  Sierra Kerr, Caitlin Simmers, Quincy Symonds, Bella Kenworthy
                </p>
              </ScheduleCard>
              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>LEFTS</label>
                    <label className="heat">Ladybirds</label>
                  </div>
                  <div className="avatars">
                    <Tooltip title="Sierra Kerr">
                      <img src="https://i.ibb.co/qYDGxGY/Sierra-Kerr.png" />
                    </Tooltip>
                    <Tooltip title="Caitlin Simmers">
                      <img src="https://i.ibb.co/XWbpxMv/Caity-Simmers.png" />
                    </Tooltip>
                    <Tooltip title="Quincy Symonds">
                      <img src="https://i.ibb.co/jbgvC7r/Quincy-Symonds.png" />
                    </Tooltip>
                    <Tooltip title="Bella Kenworthy">
                      <img src="https://i.ibb.co/GJhqNFL/Bella-Kenworthy.png" />
                    </Tooltip>
                  </div>
                </div>
                <h5>TBD</h5>
                <p>
                  Sierra Kerr, Caitlin Simmers, Quincy Symonds, Bella Kenworthy
                </p>
              </ScheduleCard>
              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>RIGHTS</label>
                    <label className="heat">Finals</label>
                  </div>
                </div>
                <h5>TBD</h5>
                <p></p>
              </ScheduleCard>
              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>LEFTS</label>
                    <label className="heat">Finals</label>
                  </div>
                </div>
                <h5>TBD</h5>
                <p></p>
              </ScheduleCard>

              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>4PM</label>
                    <label className="music">Music</label>
                  </div>
                </div>
                <h5>Cupid and the Stupids</h5>
              </ScheduleCard>
              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>5PM</label>
                    <label className="music">Music</label>
                  </div>
                </div>
                <h5>The Oogars</h5>
              </ScheduleCard>
              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>6:00PM - 6:45PM</label>
                    <label>Premiere</label>
                  </div>
                </div>
                <h5>Wade Goodall's new biopic: Pentacoastal</h5>
              </ScheduleCard>
              <ScheduleCard>
                <div className="label-row">
                  <div>
                    <label>7:00PM - 8:00PM</label>
                    <label className="music">Music</label>
                  </div>
                </div>
                <h5>Goons of Doom</h5>
              </ScheduleCard>
            </SectionBlock> */}

            <SectionBlock id="competitors">
              <SectionTitle>Competitors</SectionTitle>
              <CompetitorRow>
                {surfers_melbourne_2020.map(surfer => (
                  <CompetitorCard>
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
            {/* <SectionBlock>
              <SectionTitle>Ladybirds</SectionTitle>
              <CompetitorRow>
                {ladybirds_melbourne_2020.map(surfer => (
                  <CompetitorCard>
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
            </SectionBlock> */}
          </MainSection>
        </Main>
        <Panel>
          {/* <DesktopView>
            <StickyScroll>
              <EventDetails>{renderCTA()}</EventDetails>
              <EventDetails>{renderHostDetails()}</EventDetails>
            </StickyScroll>
          </DesktopView> */}
        </Panel>
      </PageContainer>
    </>
  );
};

export default EventPage;
