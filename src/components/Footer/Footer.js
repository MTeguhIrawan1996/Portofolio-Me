import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Logo, NavIcon1, NavIcon2, NavIcon3 } from "../../assets";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={NavIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={NavIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={NavIcon3} alt="Icon" />
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
