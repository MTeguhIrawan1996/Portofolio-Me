import React, { useEffect, useState } from "react";
import Loader from "./utils/loader";
import { Banner, Contact, Footer, Navbar, Proyek, Skills } from "./components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) return <Loader />;
  return (
    <>
      <div className="App">
        <Navbar />
        <Banner />
        <Skills />
        <Proyek />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
