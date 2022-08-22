import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ColorSharp, Meter1, Meter2, Meter3 } from "../../assets";

export const Skilss = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <React.Fragment>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skill</h2>
                <p>
                  Velit non anim quis reprehenderit adipisicing irure est ad
                  velit fugiat in minim consectetur. In in culpa exercitation
                  veniam consequat consectetur incididunt. Cillum mollit nisi
                  culpa ut nulla sunt. Exercitation anim est consequat tempor
                  laboris ipsum non occaecat laborum officia. Pariatur tempor
                  veniam fugiat occaecat amet proident.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={Meter1} alt="images" />
                    <h5>Web Developer</h5>
                  </div>
                  <div className="item">
                    <img src={Meter2} alt="images" />
                    <h5>Front-End</h5>
                  </div>
                  <div className="item">
                    <img src={Meter3} alt="images" />
                    <h5>Back-End</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img
          className="background-image-left"
          src={ColorSharp}
          alt="img-sharp"
        />
      </section>
    </React.Fragment>
  );
};
