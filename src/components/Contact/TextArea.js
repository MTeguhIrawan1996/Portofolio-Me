import React, { useState } from "react";
import { Col } from "react-bootstrap";

const TextArea = (props) => {
  const { error, col, ...inputProps } = props;

  return (
    <Col sm={col} className="px-1">
      <textarea {...inputProps} />
      <span className="span-error">{error}</span>
    </Col>
  );
};

export default TextArea;
