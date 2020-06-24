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
  IframeContainer
} from "./styles";

const EventPage = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const iframe =
    '<iframe width="100%" height="100%" id="scaled-frame" src="https://bsview.s3-us-west-2.amazonaws.com/index_stab100.html" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>';

  const renderCTA = () => {
    return (
      <>
        <Title>Surf 100</Title>
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
        <Button
          mb="12px"
          onClick={() =>
            window.open(
              "https://www.eventbrite.com.au/e/stab-high-an-international-surfing-contest-in-melbourne-tickets-95535339773?aff=ebdssbeac",
              "_blank"
            )
          }
        >
          Buy Tickets
        </Button>
        {/* <ButtonSecondary onClick={() => window.location.replace("/watch")}>
          Purchase Pay-Per-View
        </ButtonSecondary> */}
      </>
    );
  };

  const renderHostDetails = () => {
    return (
      <>
        <div className="host-banner">
          <div className="host">
            <img src={HostImage} />
          </div>
          <div>
            <label>Event Info</label>
            <Title>TBD</Title>
          </div>
        </div>
        <SecondaryText>
          Located just 5 minutes from Melbourne airport and 23 minutes from
          Melbourne CBD, Australia’s first-ever surf park is now open at 309
          Melrose Drive, Tullamarine.
        </SecondaryText>
        <ButtonSecondary
          onClick={() =>
            window.open(
              "https://www.google.com/maps/dir//URBNSURF+Melbourne,+309+Melrose+Dr,+Tullamarine+VIC+3045,+Australia/@-37.6866251,144.8654545,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6ad65978cf1f6f57:0x2b79603356a4d0d2!2m2!1d144.8676485!2d-37.6866251",
              "_blank"
            )
          }
        >
          Get Directions
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
              href="/#sponsors"
              onClick={() => setActiveTab("Sponsors")}
              active={activeTab === "Sponsors"}
            >
              Sponsors
            </MenuItem>
            <MenuItem
              href="/#schedule"
              onClick={() => setActiveTab("Schedule")}
              active={activeTab === "Schedule"}
            >
              Schedule
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
            <EventDetails>{renderCTA()}</EventDetails>
            <EventDetails>{renderHostDetails()}</EventDetails>
          </MobileView>
          <MainSection>
            <SectionBlock id="description">
              <SectionTitle>Description</SectionTitle>
              <SectionCopy>
                Featuring Kelly Slater, Mike Reid and John Reader at their home
                breaks.
                <ul>
                  <li>
                    100% of ticket sales will be donated to Greening Australia.
                  </li>
                  <li>
                    The first stop of the Stab High world tour takes place in
                    Melbourne, Australia. The event started in 2018 and this is
                    the first event that have ever taken place outside of Waco,
                    Texas.
                  </li>
                  <li>
                    This year the Ladybirds will be back, a young women's aerial
                    event. Reigning champ Sierra Kerr will be back to defend her
                    title against the "flying squirrel", Quincy Symonds.
                  </li>
                  <li>
                    There'll be live music, food carts and refreshments. The
                    event is fully licensed and no outside drinks are permitted
                    inside the venue.
                  </li>
                  <li>
                    VIP tickets include coffee, lunch, alcoholic beverages along
                    with non-alcoholic options. Tickets also include Stab High
                    tote bag, hat, stubbie cooler and towel.
                  </li>
                  <li>
                    Kids under 13 are free. It's a family friendly event and
                    drinking will only take place in licensed areas.
                  </li>
                  <li>
                    Everyone will be allowed to surf, sorry not the premiere
                    out-the-back wave but the reform wave in the lagoon.
                  </li>
                </ul>
              </SectionCopy>
            </SectionBlock>

            <SectionBlock id="sponsors">
              <SectionTitle>Sponsors</SectionTitle>
              <SponsorsRow>
                <a href="https://www.vans.com/" target="_blank">
                  <SponsorCard>
                    <img src={VansLogo} />
                  </SponsorCard>
                </a>
                <a href="https://www.monsterenergy.com/" target="_blank">
                  <SponsorCard large>
                    <img src={MonsterLogo} />
                  </SponsorCard>
                </a>
              </SponsorsRow>
            </SectionBlock>

            <SectionBlock id="schedule">
              <SectionTitle>Schedule</SectionTitle>
              <ScheduleCard>
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
            </SectionBlock>

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
          <DesktopView>
            <StickyScroll>
              <EventDetails>{renderCTA()}</EventDetails>
              <EventDetails>{renderHostDetails()}</EventDetails>
            </StickyScroll>
          </DesktopView>
        </Panel>
      </PageContainer>
    </>
  );
};

export default EventPage;
