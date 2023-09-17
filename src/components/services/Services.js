import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard"; // Import the ServiceCard component
import Particle from "../Particle";
import api from "../../Assets/services/api.avif"
import app from "../../Assets/services/app.png"
import social from "../../Assets/services/social.jpeg"
import sql from "../../Assets/services/sql.avif"
import tool from "../../Assets/services/toool.avif"
import management from "../../Assets/services/website-management.jpeg"


function Services() {
  return (
    <Container fluid className="project-section">w
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Services</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the services I offer.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ServiceCard
              imgPath={management}
              title="Management Website"
              description="Created a dynamic management platform with responsive design, leveraging HTML, CSS, and JavaScript. Seamlessly integrated secure payment processing and established robust user authentication. Achieved exceptional website performance optimization and guaranteed compatibility across various web browsers."
              link="https://example.com/api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServiceCard
              imgPath={app}
              title="Mobile App"
              description="Created a mobile app using Flutter and Dart. Implemented various features such as user authentication, push notifications, and API integration. Ensured smooth performance and intuitive user interface."
              link="https://example.com/api"
            />
          </Col> <Col md={4} className="project-card">
            <ServiceCard
              imgPath={tool}
              title="Project Management Tool"
              description="Developed a project management tool using React JS and Material UI. Implemented features like task tracking, team collaboration, and file sharing. Ensured seamless user experience and efficient project management."
              link="https://example.com/api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServiceCard
              imgPath={social}
              title="Social Media App"
              description="Built a social media app using Laravel and PHP. Implemented features like user profiles, post creation, and real-time notifications. Ensured data security and optimized database performance."
              link="https://example.com/api"
            />
          </Col> <Col md={4} className="project-card">
            <ServiceCard
              imgPath={api}
              title="API Testing"
              description="Performed API testing using Postman. Created test cases, executed requests, and analyzed responses. Ensured API functionality and identified and resolved issues."
              link="https://example.com/api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServiceCard
              imgPath={sql}
              title="Database Management"
              description="Managed databases using MySQL. Created tables, optimized queries, and ensured data integrity. Implemented backup and recovery strategies for data security."
              link="https://example.com/api"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
