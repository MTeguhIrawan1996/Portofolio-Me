import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col xs={12} sm={6} md={4} className="p-2">
      <div className="proj-imgbx">
        <a className="stretched-link d-block" target="_blank" href={url} />
        <img src={imgUrl} alt={`Img-${imgUrl}`} className="img-cover" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
