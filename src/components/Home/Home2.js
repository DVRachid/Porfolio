import {React , useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/yy.png";
import Tilt from "react-parallax-tilt";
import { FaArrowUp ,FaArrowDown } from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Service from "../services/Services";
import ContactUs from "../contact/contact";

function Home2() {
  const [isUp, setIsUp] = useState(true);

  const toggleScroll = () => {
    if (isUp) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
    setIsUp(!isUp);
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Flutter, Reat Js ,Laravel </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Flutter</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b>
              </i>
            </p>
          </Col>
          <Col md={4} >
            <Tilt>
              <img src ={myImg}  className="img-fluid"  alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Service />
        <ContactUs />
        <br/>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DVRachid"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rachid-ouchaikh-199104207/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rachid_ouchaikh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          
          <button
          className="scroll-to-top-button"
          onClick={toggleScroll}
          style={{
            position: "fixed", // Fixed position to keep it in the right corner
            bottom: "80px",    // Adjust vertical position as needed
            right: "20px",     // Adjust horizontal position as needed
            borderRadius: "50%", // Make it circular
            width: "40px",     // Set the width and height for the button
            height: "40px",
            backgroundColor: "purple", // Button background color
            color: "#fff",             // Text color
            border: "none",            // Remove border
            // cursor: "pointer",         // Add pointer cursor
          }}
        >
          {isUp ? <FaArrowUp /> : <FaArrowDown />}
        </button>

        </Row>
      </Container>
      
    </Container>
    
  );
 
}
export default Home2;
