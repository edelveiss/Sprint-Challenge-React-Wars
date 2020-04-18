// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Char from "./Char";

const Characters = (props) => {
  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => {
          console.log("response.data.results", response.data.results);
          console.log("response.data", response.data);
          props.setCharacterList(response.data.results);
        })
        .catch((error) => {
          console.log("the data was not returned", error);
        });
    };
    getCharacters();
  }, []);

  return (
    <Container style={{ marginRight: "unset", marginBottom: "1rem" }}>
      <Row>
        {props.characterList.map((character) => (
          <Link key={character.id} to={`/characters/${character.id}`}>
            {console.log("character", character.id)}
            <Char
              key={character.id}
              character={character}
              setCurrentChar={props.setCurrentChar}
            />
          </Link>
        ))}
      </Row>
    </Container>
  );
};
export default Characters;
