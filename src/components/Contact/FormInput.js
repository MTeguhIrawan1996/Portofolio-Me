import React from "react";
import { Col } from "react-bootstrap";

const FormInput = (props) => {
  const { error, col, ...inputProps } = props;
  return (
    <Col sm={col} className="px-1">
      <input {...inputProps} />
      <span className="span-error">{error}</span>
    </Col>
  );
};

export default FormInput;
