import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col xs={6} sm={6} md={4} className="p-2">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
