import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import { ContactImg } from "../../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [send, setSend] = useState(false);
  const [sendText, setSendText] = useState("Send");
  const form = useRef();
  const inputName = useRef("");
  const inputEmail = useRef("");
  const inputTel = useRef("");
  const inputMessage = useRef("");

  const notify = () => toast("Message sent successfully", { theme: "dark" });

  const sendEmail = (e) => {
    e.preventDefault();
    if (send === true) {
      setSendText("Send....");
      emailjs
        .sendForm(
          `${process.env.REACT_APP_EMAIL_ID}`,
          `${process.env.REACT_APP_TEMPLATE_ID}`,
          form.current,
          `${process.env.REACT_APP_USER_ID}`
        )
        .then(
          (result) => {
            console.log(result.text);
            setSendText("Send");
            setSend(false);
            notify();
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  const handleSend = () => {
    inputName.current.value === "" ||
    inputEmail.current.value === "" ||
    inputMessage.current.value === "" ||
    inputTel.current.value === ""
      ? setSend(false)
      : setSend(true);
  };
  return (
    <React.Fragment>
      <section className="contact" id="contact">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={ContactImg} alt="Contact-Img" />
            </Col>
            <Col md={6}>
              <h2>Get In Touch</h2>
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      ref={inputName}
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      required
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      ref={inputEmail}
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      required
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      ref={inputTel}
                      type="tel"
                      name="user_tel"
                      placeholder="Telepon"
                      required
                    />
                  </Col>
                  <Col md={12} className="px-1">
                    <textarea
                      ref={inputMessage}
                      name="message"
                      placeholder="Message"
                      required
                    />
                    <button type="submit" value="send" onClick={handleSend}>
                      <span
                        className={`${
                          send === true
                            ? "spinner-border spinner-border-sm"
                            : ""
                        }`}
                        role="status"
                        aria-hidden="true"
                      ></span>{" "}
                      <span>{sendText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Contact;
