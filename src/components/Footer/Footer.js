import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Github, NavIcon1, NavIcon3 } from "../../assets";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/m-teguh-irawan-774762229"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={NavIcon1} alt="Icon-linkein" />
              </a>
              <a
                href="https://github.com/MTeguhIrawan1996"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="icon-github" />
              </a>
              <a
                href="https://www.instagram.com/whaann__/?hl=id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={NavIcon3} alt="Icon-IG" />
              </a>
            </div>
            <p>
              Created with <i className="fa-solid fa-globe"></i> by Muhammad
              Teguh Irawan
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
