import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ContactImg } from "../../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import FormInput from "./FormInput";
import TextArea from "./TextArea";

const Contact = () => {
  const notify = () => toast("Message sent successfully", { theme: "dark" });
  const [send, setSend] = useState(false);
  const [sendText, setSendText] = useState("Send");
  const [formErr, setFormErr] = useState({});
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    user_tel: "",
    message: "",
    date: new Date().toDateString(),
  });
  const inputs = [
    {
      name: "user_name",
      type: "text",
      placeholder: "Name",
      error: formErr.user_name,
      col: 6,
    },
    {
      name: "user_tel",
      type: "tel",
      placeholder: "Telepon",
      error: formErr.user_tel,
      col: 6,
    },
    {
      name: "user_email",
      type: "text",
      placeholder: "Email",
      col: 12,
      error: formErr.user_email,
    },
  ];
  const sendEmail = async (e) => {
    e.preventDefault();
    setFormErr(validate(data));
    const formErrors = validate(data);
    if (Object.keys(formErrors).length === 0) {
      setSend(true);
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
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const phoneRegex = /^\(?([0-9]{10,16})\)?[-.]?$/;
    if (!values.user_name) {
      errors.user_name = "Name is Required";
    } else if (values.user_name.length < 3) {
      errors.user_name = "Name must be more then 3 characters";
    }
    if (!values.user_email) {
      errors.user_email = "Email is Required";
    } else if (!emailRegex.test(values.user_email)) {
      errors.user_email = "This is not valid email format";
    }
    if (!values.user_tel) {
      errors.user_tel = "Telepon is Required";
    } else if (!phoneRegex.test(values.user_tel)) {
      errors.user_tel = "This is not valid Phone number format";
    }
    if (!values.message) {
      errors.message = "Message is Required";
    } else if (values.message.length < 5) {
      errors.message = "Messae must be more then 5 characters";
    }
    return errors;
  };

  return (
    <React.Fragment>
      <section className="contact" id="contact">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={ContactImg} alt="Contact-Img" />
            </Col>
            <Col md={6} className="form-input">
              <h2>Get In Touch</h2>
              <form onSubmit={sendEmail}>
                <Row>
                  {inputs.map((data, i) => {
                    return (
                      <FormInput
                        className={data.error ? `border-error` : ""}
                        key={i}
                        {...data}
                        col={data.col}
                        ref={data.ref}
                        onChange={handleChange}
                      />
                    );
                  })}
                  <TextArea
                    className={formErr.message ? `border-error` : ""}
                    name="message"
                    placeholder="Message"
                    error={formErr.message}
                    col="12"
                    onChange={handleChange}
                  />
                  <Col className="px-1">
                    <button type="submit" value="send">
                      <span>{sendText} </span>
                      <span
                        className={`${
                          send === true
                            ? "spinner-border spinner-border-sm"
                            : ""
                        }`}
                        role="status"
                        aria-hidden="true"
                      />
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
