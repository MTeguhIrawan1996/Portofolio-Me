import React from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ColorSharp2, FrBooking, Template } from "../../assets";
import { ProjectCard } from "./ProjectCard";

const Proyek = () => {
  const projects = [
    {
      title: "Front-End",
      description: "Ui Website Booking and Travel",
      imgUrl: FrBooking,
      url: "https://frontend-booking-qok5.vercel.app/",
    },
    {
      title: "Coming Soon",
      description: "Design & Development",
      imgUrl: Template,
    },
    {
      title: "Coming Soon",
      description: "Design & Development",
      imgUrl: Template,
    },
  ];
  return (
    <React.Fragment>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>Examples of some of the last projects I've developed</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((data, index) => {
                        return <ProjectCard key={index} {...data} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Coming Soon...</Tab.Pane>
                  <Tab.Pane eventKey="third">Coming Soon</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={ColorSharp2} alt="img-2" />
      </section>
    </React.Fragment>
  );
};

export default Proyek;
