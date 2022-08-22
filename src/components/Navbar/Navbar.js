import React, { useEffect, useRef, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavIcon1, NavIcon2, NavIcon3 } from "../../assets";
import { TabTitle } from "../../utils/generalFunction";
import { HouseFill, PersonWorkspace, Cast } from "react-bootstrap-icons";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [clasClick, setClasClick] = useState("");
  const [click, setClick] = useState(false);
  TabTitle(activeLink);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const clasSetClick = (value) => {
    value === "klik" ? setClick(true) : setClick(false);
    setClasClick(value);
  };

  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        className={`${clasClick} ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home" onClick={() => setActiveLink("Home")}>
            <span>OneDev</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() =>
              click === false ? clasSetClick("klik") : clasSetClick("")
            }
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={`mb-1 mb-lg-0 ${
                  activeLink === "Home" ? "navbar-link active" : ""
                }`}
                onClick={() => onUpdateActiveLink("Home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={`mb-1 mb-lg-0 ${
                  activeLink === "Skills" ? "navbar-link active" : ""
                }`}
                onClick={() => onUpdateActiveLink("Skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={`${
                  activeLink === "Project" ? "navbar-link active" : ""
                }`}
                onClick={() => onUpdateActiveLink("Project")}
              >
                Project
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={NavIcon1} alt="nv-1" />
                </a>
                <a href="#">
                  <img src={NavIcon2} alt="nv-2" />
                </a>
                <a href="#">
                  <img src={NavIcon3} alt="nv-3" />
                </a>
              </div>
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Lets'Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <ul className="navbot p-0">
          <li
            className={`${activeLink === "Home" ? "active" : ""}`}
            onClick={() => onUpdateActiveLink("Home")}
          >
            <a href="#">
              <span className="icon">
                <HouseFill />
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li
            className={`${activeLink === "Skills" ? "active" : ""}`}
            onClick={() => onUpdateActiveLink("Skills")}
          >
            <a href="#">
              <span className="icon">
                <PersonWorkspace />
              </span>
              <span className="text">Skilss</span>
            </a>
          </li>
          <li
            className={`${activeLink === "Project" ? "active" : ""}`}
            onClick={() => onUpdateActiveLink("Project")}
          >
            <a href="#">
              <span className="icon">
                <Cast />
              </span>
              <span className="text">Project</span>
            </a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
};
