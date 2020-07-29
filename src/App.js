import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";

import axios from "axios";
import Logo from "./logo.jpg";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-julie.herokuapp.com/offer/with-count"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("Use Effect");
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="App">
      <header>
        <img className="logo" alt="logo" src={Logo} />
        <button className="new-offer">Déposer une annonce</button>
        <button className="research">Rechercher</button>
        <button className="to-connect">Se connecter</button>
      </header>
      <Router>
        <Switch>
          <Route path="/offer/:id">
            <Offer data={data} />
          </Route>
          <Route path="/offers">
            <Offers data={data} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
