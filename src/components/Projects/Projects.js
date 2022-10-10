import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import OneWeb from "../../Assets/Projects/OneWeb.png";
import calcul from "../../Assets/Projects/calcul.jpg";
import labbasni from "../../Assets/Projects/labbasni.jpg";
import ichrili from "../../Assets/Projects/ichrili.png";
import OneMobile from "../../Assets/Projects/one.jpg";
import bonsai from "../../Assets/Projects/Bonsai2.jpg";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ichrili}
              isBlog={false}
              title="Ichrili"
              description="create a shopping list and share with friends and families using angular-cli and nodeJs and mongodb"
              ghLink="https://github.com/NajehRouin/ichrili-frontend"
              demoLink="https://github.com/NajehRouin/ichrili-backend"
             
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bonsai}
              
              isBlog={false}
              title="Bonsai"
              description="Bonsai online sales mobile application with expo react native"
              ghLink="https://github.com/NajehRouin/Bonsai/tree/main"
              //demoLink="https://blogs.soumya-jit.tech/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={labbasni}
              isBlog={false}
              title="Labbasni"
              description="E-commerce mobile app that finds clothes in your area store and buys online using expo react native "
              ghLink="https://github.com/NajehRouin/Labbesni/tree/master"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OneWeb}
              isBlog={false}
              title="ONE dashboard"
              description="administrator of the dashboard managed by Tunisian organizations to register a subscriber using nodejs and angular cli and mongodb."
              ghLink="https://github.com/NajehRouin/web-front-One/tree/master"
              demoLink="https://github.com/NajehRouin/One-BackEnd/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OneMobile}
              isBlog={false}
              title="ONE Mobile"
              description="mobile networking application for Tunisian organizations to create the transaction between them via the QRCode and make the remittance after each transaction and earn score points using expo react native and nodejs and mongodb and make the prototype with Figma "
              ghLink="https://github.com/NajehRouin/ONE-Mobile"
           demoLink="https://github.com/NajehRouin/One-BackEnd/tree/master"
           figma="https://www.figma.com/proto/lqn1XPrZ28AL4DR7GNk31W/One?node-id=91%3A63&scaling=scale-down&page-id=0%3A1&starting-point-node-id=323%3A509" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calcul}
              isBlog={false}
              title="React Native Calculator"
              description="Calculator made in React Native with light & dark theme functionality"
              ghLink="https://github.com/NajehRouin/Calculator-ReactNative/tree/master"
              Link="https://github.com/NajehRouin/Calculator-ReactNative#demo" 
           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
