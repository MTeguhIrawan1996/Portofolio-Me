import React from "react";
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ColorSharp2, Projek1, Projek2, Projek3 } from "../../assets";
import { ProjectCard } from "./ProjectCard";

const Proyek = () => {
  const projects = [
    {
      title: "Coming Soon",
      description: "Design & Development",
      imgUrl: Projek1,
    },
    {
      title: "Coming Soon",
      description: "Design & Development",
      imgUrl: Projek2,
    },
    {
      title: "Coming Soon",
      description: "Design & Development",
      imgUrl: Projek3,
    },
    {
      title: "Coming Soon",
      description: "Design & Development",
      imgUrl: Projek1,
    },
    {
      title: "Coming Soon",
      description: "Design & Development",
      imgUrl: Projek2,
    },
    {
      title: "Coming Soon",
      description: "Design & Development",
      imgUrl: Projek3,
    },
  ];
  return (
    <React.Fragment>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                Irure anim voluptate nostrud sint. Reprehenderit aute dolor
                tempor laborum irure consequat adipisicing incididunt do esse
                est. Dolor laboris cillum occaecat ad. Eiusmod aliquip veniam
                cupidatat mollit et et.
              </p>
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
