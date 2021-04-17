import React from "react";
import "./carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, CardDeck, Card, Container } from "react-bootstrap";
import Cards from "../cards";
import choncc from "./choncc_panda_lose2.png";
import overlay from "./Kawaii.png";
import cute from "./cute.gif";
import chat from "./KawaiiChat.png";
import panel from "./Chat.png";
import test from "./Kawaii2.png";

function Selections(props) {
  return (
    <Container>
      <Carousel nextIcon={false} prevIcon={false}>
        <Carousel.Item>
          <CardDeck>
            <Cards
              image={overlay}
              title="Overlays"
              text="We have several Overlays ready to download and use for your next stream"
            />
            <Cards
              image={cute}
              title="Animations"
              text="Want some cute animations? We have a gallery of them!"
            />
            <Cards
              image={choncc}
              title="Emotes"
              text="Hit Affiliate? Want some Emotes to make your stream more professional? Come check it out!"
            />
          </CardDeck>
        </Carousel.Item>
        <Carousel.Item>
          <CardDeck>
            <Cards
              image={chat}
              title="Transitions"
              text="Need a Transition to look cooler? Come check some of ours out!"
            />
            <Cards
              image={panel}
              title="About Panels"
              text="Don't forget! Some people like to know why you do what you do!"
            />
            <Cards
              image={test}
              title="Custom Content"
              text="Don't like what you see, wanna be different? Ask us for some Customs!"
            />
          </CardDeck>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Selections;
