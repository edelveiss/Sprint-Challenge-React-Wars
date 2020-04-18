import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
  CardImg,
  CardSubtitle,
} from "reactstrap";

const Episodes = (props) => {
  console.log("epidesc", props);
  return (
    <Col xs="6" md="4" xl="3">
      <Card style={{ width: "15rem", margin: "1rem", height: "230px" }}>
        <CardBody style={{ background: "#c4e6e8" }}>
          <CardTitle
            style={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
              borderBottom: "2px solid grey",
            }}
          >
            {props.name}
          </CardTitle>
          <CardSubtitle>Air Date: {props.airDate}</CardSubtitle>

          <CardText>Episode: {props.episode}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Episodes;
