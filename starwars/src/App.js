import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Characters from "./components/Characters";
import CharDetails from "./components/CharDetails";
const App = () => {
  const [characterList, setCharacterList] = useState([]);
  const [currenChar, setCurrentChar] = useState([]);

  return (
    <div className="App">
      <nav>
        <h1>Rick and Morty </h1>
        <Link to="/">
          <h2 style={{ fontSize: "2rem", textShadow: "2px 2px white" }}>
            Home
          </h2>
        </Link>
      </nav>

      <Switch>
        <Route exact path="/characters/:charID">
          <CharDetails characterList={characterList} />
        </Route>

        <Route exact path="/">
          <Characters
            characterList={characterList}
            setCharacterList={setCharacterList}
            setCurrentChar={setCurrentChar}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
