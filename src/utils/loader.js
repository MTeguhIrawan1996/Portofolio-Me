import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="d-flex">
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="primary" />
      </div>
    </div>
  );
};

export default Loader;
