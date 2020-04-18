import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import EpiDesc from "./EpiDesc";

const Episodes = (props) => {
  console.log("episodeProps", props.episodes);
  const [episode, setEpisode] = useState([]);

  const episodeArr = props.episodes;
  console.log("props episodeArr", episodeArr);
  var response = [];
  useEffect(() => {
    axios
      .all(episodeArr.map((l) => axios.get(l)))
      .then(
        axios.spread(function (...res) {
          console.log("this is res", res);
          setEpisode(res);
        })
      )
      .catch((error) => {
        console.log("the Episode data was not returned", error);
      });
  }, [episodeArr]);
  console.log("this is episode data99999: ", episode);

  return (
    <Container style={{ marginBottom: "1rem" }}>
      <Row>
        {episode.map((el) => (
          <EpiDesc
            key={el.data.id}
            name={el.data.name}
            airDate={el.data.air_date}
            episode={el.data.episode}
          />
        ))}
      </Row>
    </Container>
  );
};
export default Episodes;
