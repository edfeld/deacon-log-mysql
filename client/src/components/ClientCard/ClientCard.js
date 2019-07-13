import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

// function Book({ title, subtitle, authors, link, description, image, Button }) {
function ClientCard( props ) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-4">
          <div className="font-italic">Name: {props.lastName}, {props.firstName}</div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
            <div className="font-italic">Address1: {props.streetAddress1}</div>
          </Col>
      </Row>
      <Row>
          <Col size="md-12">
            <div className="font-italic">{props.streetAddress2}</div>
          </Col>
      </Row>
      <Row>
        <div>Details</div>
      </Row>
    </ListItem>
  );
}

export default ClientCard;