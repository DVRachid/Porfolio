import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiAndroidstudio,
  SiEclipseche,
  SiCanva,
  SiEclipseide,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiAndroidstudio style={{ color: "#3DDC84" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: "#007ACC" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ color: "#FF6C37" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide style={{ color: "#5D2590" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva style={{ color: "#00C4CC" }} />
      </Col>
    </Row>
  );
}

export default Toolstack;
