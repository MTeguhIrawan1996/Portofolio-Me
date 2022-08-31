import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { Skilss } from "./components/Skills/Skills";
import { Proyek } from "./components/Proyek/Project";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import "./components/Banner/Banner.css";
import "./components/Navbar/Navbar.css";
import "./components/Navbot/Navbot.css";
import "./components/Skills/Skilss.css";
import "./components/Proyek/Project.css";
import "./components/Contact/Contact.css";
import "./components/Footer/Footer.css";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <Skilss />
        <Proyek />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
