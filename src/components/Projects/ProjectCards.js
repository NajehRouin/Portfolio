import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    
   
    <Card className="project-card-view">
      <a href={props.imgPath} target="_blank" rel="noreferrer">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"  />
  </a>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <hr/>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "Front_End"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsGithub /> &nbsp;
            {"Back_End"}
          </Button>
        )}
        
        {!props.isBlog && props.Link && (
          <Button
            variant="primary"
            href={props.Link}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

<br/><br/>
{!props.isBlog && props.figma && (

          <Button
            variant="primary"
            href={props.figma}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Link prototype"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
