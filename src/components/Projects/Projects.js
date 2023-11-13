import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import shoppingCart from "../../Assets/Projects/Project5.png";
import WeatherApp from "../../Assets/Projects/Project4.png";
import RazorPayClone from "../../Assets/Projects/project3.png";
import PasswordGenerator from "../../Assets/Projects/Project2.png";
import skillTeach from "../../Assets/Projects/Project1.png";

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
              imgPath={skillTeach}
              isBlog={false}
              title="Skill Teach - A Edtech Platform"
              description="Skill Teach is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS "
              ghLink="https://github.com/MrSomnathRoy/Skill-Teach.github.io"
              demoLink="https://skill-teach-somnath-roy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RazorPayClone}
              isBlog={false}
              title="RazorPay-Clone"
              description="It's a website that has been designed to mimic the design of the popular Indian payment gateway, Razorpay. "
              ghLink="https://github.com/MrSomnathRoy/RazorPay-Clone"
              demoLink="https://razorpay-copy.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="Weather-App"
              description="A Weather App from where you can know about the Weather of your locality and other places "
              ghLink="https://github.com/MrSomnathRoy/Weather-App/"
              demoLink="https://mrsomnathroy.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PasswordGenerator}
              isBlog={false}
              title="Password Generator"
              description="Developed a dynamic and user-friendly website utilizing HTML, CSS, and JavaScript to generate secure and unique passwords on demand "
              ghLink="https://github.com/MrSomnathRoy/Password-Generator"
              demoLink="https://mrsomnathroy.github.io/Password-Generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingCart}
              isBlog={false}
              title="Shopping Card"
              description="I designed and developed a user-friendly e-commerce website
              using React and Tailwind CSS, integrated API data for product
              listings, implemented an intuitive cart system with add-to-cart and
              remove-from-cart features, showcasing my skills in responsive
              design, state management, and front-end development."
              ghLink="https://github.com/MrSomnathRoy/Shopping-Cart.github.io"
              demoLink="https://sr-shopping-cart.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
