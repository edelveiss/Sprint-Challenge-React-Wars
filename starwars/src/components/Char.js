import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
  CardImg,
  CardSubtitle,
} from "reactstrap";

const Char = (props) => {
  // console.log("Char Props", props.character);
  let charProps = props.character;
  // console.log("charProps", charProps);

  return (
    <Col xs="6" md="4" xl="3">
      <Card style={{ width: "18rem", marginTop: "2rem", height: "460px" }}>
        <CardImg
          style={{ height: "250px" }}
          src={props.character.image}
          alt={`Photo of ${props.character.name} ${props.character.species}`}
        />
        <CardBody style={{ background: "#c4e6e8" }}>
          <CardTitle style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
            {props.character.name}
          </CardTitle>
          <CardSubtitle>{props.character.species}</CardSubtitle>

          <CardText>{props.character.type}</CardText>
          <CardText>{props.character.gender}</CardText>
          <CardText style={{ color: "grey" }}>Read more details...</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Char;
