import React, { useState, useEffect } from "react";
import { render } from "@testing-library/react";

import {
    PageContainer,
    NavSection,
    Banner,
    NavBar,
    KoloheBanner,
    Button,
    Footer,
    ContentContainer,
    TitleSection,
    ContactInfo,
    ContentWrapper

} from "./styles"

import s100dark from "../../lib/assets/s100logodark.png";
import s100white from "../../lib/assets/s100logowhite.png";
import insta from "../../lib/assets/insta.png";
import contacticon from "../../lib/assets/contacticon.gif";



const Contact = () => {


    return (
        <PageContainer>
            <ContentWrapper>
                <NavSection>
                    {" "}
                    <Banner></Banner>
                    <NavBar>
                        <a href="/">
                            <img src={s100dark} />
                        </a>
                        <div>
                            <Button href="/event">Watch the Event</Button>
                        </div>
                    </NavBar>
                </NavSection>
                <KoloheBanner><a href="https://stabmag.com/news/kolohe-andino-wins-surf100-at-lower-trestles/">Kolohe Andino wins inaugural Surf100 at Lowers</a></KoloheBanner>

                <ContentContainer>
                    <TitleSection>
                        <h2>Contact</h2>
                        <p>So you want to make yourself heard? You got a story? A lead? A scoop? Whatevs. If some personal contact is what tickles your taint then drop us an email or pick up the phone.</p>
                    </TitleSection>
                    <ContactInfo>
                        <img src={contacticon} />
                        <div>
                            <h4><span>Surf 100:</span> surf100@stabmag.com</h4>
                            <h4><span>Digital Editorial:</span> michael@rollingyouth.com </h4>
                            <h4><span>Advertising (AUS):</span>tom@rollingyouth.com </h4>
                            <h4><span>Advertising (USA):</span> aaron@rollingyouth.com </h4>
                        </div>
                    </ContactInfo>
                </ContentContainer>
            </ContentWrapper>

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
    )
}

export default Contact;
