import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

// function Book({ title, subtitle, authors, link, description, image, Button }) {
function ClientCard( props ) {
  // console.log("props in clientCard: ", props);
  return (
    <ListItem>
      <Row className="">
        <Col size="md-4">
          <div className="">Name: <span className="font-italic">{props.lastName}, {props.firstName}</span></div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
            <div className="font-italic">Address1: {props.streetAddress1}</div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div className="font-italic">Address2: {props.streetAddress2}</div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div className="font-italic">{props.city}, {props.USState || '__'}&nbsp;&nbsp; {props.ZIP}</div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div className="font-italic">Phone 1: { props.phone1? `(${props.phone1.substr(0,3)}) ${props.phone1.substr(3,3)}-${props.phone1.substr(6,4)}`: "empty"}</div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div className="font-italic">Phone 1 Type: {props.phone1Type}</div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div className="font-italic">Phone 2: {props.phone2}</div>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <div className="font-italic">Phone 2 Type: {props.phone2Type}</div>
        </Col>
      </Row>
      <Row>
        <div>Details</div>
      </Row>
    </ListItem>
  );
}

export default ClientCard;