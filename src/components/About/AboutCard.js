import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple" style ={{width:"0"}}>OUCHAIKH RACHID</span> from <span className="purple"> Casablanca, Morocco.</span>
            <br /> I'm Junior Full Stack Developer passionate about the creation of web and mobile applications with a development experience with various languages and frameworks.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing FootBall
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing BasketBal
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rachid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
