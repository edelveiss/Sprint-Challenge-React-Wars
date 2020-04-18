import React, { useState, useEffect } from "react";
import axios from "axios";
import Episodes from "./Episodes";
import {
  useParams,
  Route,
  Link,
  NavLink,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const CharDetails = (props) => {
  console.log("charDetails", props);
  const { charID } = useParams();
  const someId = useParams();
  console.log("someId", someId);

  const match = useRouteMatch();
  console.log("match", match);
  console.log("props.characterList", props.characterList);
  //path: "/characters/:charID"
  //url: "/characters/1"
  const { path, url } = useRouteMatch();
  const choosedCharacter = props.characterList.find(
    (el) => el.id === Number(charID)
  );
  console.log("choosedCharacter.name", choosedCharacter.name);

  return (
    <div>
      <Card
        style={{
          width: "25rem",
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <CardImg
          top
          width="10%"
          src={choosedCharacter.image}
          alt={choosedCharacter.name}
        />
        <CardBody>
          <CardTitle style={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
            {choosedCharacter.name}
          </CardTitle>
          <CardSubtitle>{choosedCharacter.species}</CardSubtitle>
          <CardSubtitle>{choosedCharacter.gender}</CardSubtitle>
          <CardText>{choosedCharacter.origin.name}</CardText>
        </CardBody>
      </Card>
      <Episodes episodes={choosedCharacter.episode} />
    </div>
  );
};
export default CharDetails;
