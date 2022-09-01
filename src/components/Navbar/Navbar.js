import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Github, NavIcon1, NavIcon3 } from "../../assets";
import { TabTitle } from "../../utils/generalFunction";
import { HouseFill, PersonWorkspace, Cast } from "react-bootstrap-icons";

const NavBar = () => {
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
    setClick(true);
    setClasClick(value);
  };
  const clasSetClicked = (value) => {
    setClick(false);
    setTimeout(() => {
      setClasClick(value);
    }, 150);
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
              click === false ? clasSetClick("klik") : clasSetClicked("")
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
                <a
                  href="https://www.linkedin.com/in/m-teguh-irawan-774762229"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={NavIcon1} alt="nv-1" />
                </a>
                <a
                  href="https://github.com/MTeguhIrawan1996"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Github} alt="nv-2" />
                </a>
                <a
                  href="https://www.instagram.com/whaann__/?hl=id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={NavIcon3} alt="Icon-IG" />
                </a>
              </div>
              <a href="#contact" className="vvd">
                <span>Lets'Connect</span>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ul className="navbot p-0">
        <li
          className={`${activeLink === "Home" ? "active" : ""}`}
          onClick={() => onUpdateActiveLink("Home")}
        >
          <a href="#home">
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
          <a href="#skills">
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
          <a href="#project">
            <span className="icon">
              <Cast />
            </span>
            <span className="text">Project</span>
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavBar;
