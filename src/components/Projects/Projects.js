import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./projectCards";
import Particle from "../Particle";
import bra1 from "../../Assets/Projects/projet1.png";
import bra2 from "../../Assets/Projects/projct2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={bra1}
              isBlog={false}
              title="Brahim Express"
              description=" Brahim Express permet à des marchands d'acheter des produits en gros a partir de notre applcation on utilisant   
               pour developer l'app  Langage et Framework : Flutter, Dart est pour 
               Outillage et gestion de projet : Android Studio Visual Studio Code (VSC) Jira GitHub Git."
              demoLink="https://play.google.com/store/apps/details?id=com.iswy.brahimexpress&hl=fr"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={bra2}
              isBlog={false}
              title="BM Agency Travelling"
              description="Développement d'une application de gestion complète des réservations d'AlHajj et d'Omra pour une agence de voyage spécialisée.
              Back-end API: Laravel, Php, Postman.
              Front-end : React JS, Material UI, Javascript.
              Base de données : Mysql.
              Outillage et gestion de projet : Visual Studio Code (VSC), Jira,  GitHub et Git."
              demoLink="https://bm-manage.cloud/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;