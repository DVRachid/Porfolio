import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiFlutter,
  SiJira,
  SiLaravel,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter style={{ color: "#02569B" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{ color: "#F7DF1E" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ color: "#8CC84B" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{ color: "#61DAFB" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{ color: "#4DB33D" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{ color: "#F1502F" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql style={{ color: "#4479A1" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase style={{ color: "#FFCB2B" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira style={{ color: "#0052CC" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel style={{ color: "#FF2D20" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp style={{ color: "#8892BF" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{ color: "#3776AB" }} />
      </Col>
    </Row>
  );
}

export default Techstack;
