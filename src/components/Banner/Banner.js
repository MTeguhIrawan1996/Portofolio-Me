import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HeaderImg } from "../../assets";

const Banner = () => {
  return (
    <React.Fragment>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portofolio</span>
              <h1>
                {`Hi I'm M Teguh Irawan `}
                <span className="wrap">Front-End Web Developer</span>
              </h1>
              <p>
                I can make you a website that fits your needs with a budget that
                can be considered. what are you waiting for, take action now
              </p>
              <a href="#contact" className="vvd">
                Lets'connect <ArrowRightCircle size={25} />
              </a>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={HeaderImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Banner;
