import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

// function Book({ title, subtitle, authors, link, description, image, Button }) {
function ClientContactCard( props ) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-4">
          <div className="font-italic">Name: {props.lastName}, {props.firstName}</div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
            <div className="font-italic">Contact made on: {props.contactDate}</div>
          </Col>
      </Row>
      <Row>
          <Col size="md-12">
            <div className="font-italic">Expressed Need:{props.expressedNeed}</div>
          </Col>
      </Row>
      <Row>
          <Col size="md-12">
            <div className="font-italic">Help Provided:{props.helpProvided}</div>
          </Col>
      </Row>
      <Row>
        <div>Notes</div>
      </Row>
    </ListItem>
  );
}

export default ClientContactCard;