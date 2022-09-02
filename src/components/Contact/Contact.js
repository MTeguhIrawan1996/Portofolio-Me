import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ContactImg } from "../../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [send, setSend] = useState(false);
  const [sendText, setSendText] = useState("Send");
  const inputName = useRef("");
  const inputEmail = useRef("");
  const inputTel = useRef("");
  const inputMessage = useRef("");
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    user_tel: "",
    message: "",
    date: new Date().toDateString(),
  });
  console.log(process.env.REACT_APP_CONTACT);
  const notify = () => toast("Message sent successfully", { theme: "dark" });
  const sendEmail = async (e) => {
    e.preventDefault();
    if (send === true) {
      setSendText("Send....");
      if (send === true) {
        setSendText("Send....");
        await axios
          .post(`${process.env.REACT_APP_CONTACT}`, data)
          .then((res) => {
            setSendText("Send");
            setSend(false);
            notify();
            e.target.reset();
          })
          .catch((error) => {
            console.log(error);
          });
      }
      // try {
      //   const res = await fetch(`${process.env.REACT_APP_CONTACT}`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      //   });
      //   if (res.ok) {
      //     setSendText("Send");
      //     setSend(false);
      //     notify();
      //     e.target.reset();
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
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
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

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
              <form onSubmit={sendEmail}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      ref={inputName}
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      ref={inputEmail}
                      type="email"
                      name="user_email"
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      ref={inputTel}
                      type="tel"
                      name="user_tel"
                      onChange={handleChange}
                      placeholder="Telepon"
                      required
                    />
                  </Col>
                  <Col md={12} className="px-1">
                    <textarea
                      ref={inputMessage}
                      name="message"
                      onChange={handleChange}
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
