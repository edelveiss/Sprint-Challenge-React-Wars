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
        <Link to="/" style={{ fontSize: "1.3rem" }}>
          Home
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
