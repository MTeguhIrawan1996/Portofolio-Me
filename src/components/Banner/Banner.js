import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HeaderImg } from "../../assets";

export const Banner = () => {
  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("Front-End Web Developer");
  // const [delta, setDelta] = useState(150 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  // const toRotate = ["Front-End", "Back-End", "Web Developer"];
  // const periode = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updateText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);

  //   setText(updateText);

  //   if (isDeleting) {
  //     setDelta((prevDelta) => prevDelta / 2);
  //   }

  //   if (!isDeleting && updateText === fullText) {
  //     setIsDeleting(true);
  //     setIndex((prevIndex) => prevIndex - 1);
  //     setDelta(periode);
  //   } else if (isDeleting && updateText === "") {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  return (
    <React.Fragment>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portofolio</span>
              <h1>
                {`Hi I'm M Teguh Irawan`}
                <span className="wrap"> {text}</span>
              </h1>
              <p>
                Incididunt do in officia in elit ullamco dolore aute laborum
                aliquip. Et ut voluptate voluptate ad laboris consectetur ipsum.
                Qui cupidatat consequat magna mollit culpa et proident aliquip
                in ea culpa non tempor incididunt.
              </p>
              <button onClick={() => console.log("connect")}>
                Lets'connect <ArrowRightCircle size={25} />
              </button>
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
