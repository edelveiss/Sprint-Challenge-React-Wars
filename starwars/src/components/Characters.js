// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, FormGroup, Label, Input } from "reactstrap";
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

  //------------------Search---------------------------------
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.characterList);
  useEffect(() => {
    setSearchResults(props.characterList);
  }, [props.characterList]);
  console.log("characterList", props);
  console.log("searchResults", searchResults);

  useEffect(() => {
    const results = props.characterList.filter((person) => {
      return person.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log("search results", results);
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log("searchTerm", searchTerm);

  //-----------------End of Search---------------------------

  return (
    <Container style={{ marginRight: "unset", marginBottom: "1rem" }}>
      <FormGroup style={{ width: "60%" }}>
        <Label for="name"></Label>
        <Input
          type="text"
          name="textfield"
          id="name"
          placeholder="Search by name"
          onChange={handleChange}
          style={{ width: "80%" }}
        />
      </FormGroup>
      <Row>
        {searchResults.map((character) => (
          <Link key={character.id} to={`/characters/${character.id}`}>
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
