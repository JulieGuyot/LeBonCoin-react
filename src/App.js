import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import axios from "axios";
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faSearch,
  faUser,
  faClock,
  faBell,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
library.add(faPlusSquare, faSearch, faUser, faClock, faBell, faEye);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const token = Cookies.get("token");
  const [user, setUser] = useState(token || null);
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
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route path="/offer/:id">
            <Offer data={data} />
          </Route>
          <Route path="/offers">
            <Offers data={data} />
          </Route>
          <Route path="/log-in">
            <Login setUser={setUser} />
          </Route>
          <Route path="/sign-up">
            <Signup setUser={setUser} />
          </Route>
        </Switch>
        <Footer className="footer" lieu="Le Reacteur" name="Julie" />
      </Router>
    </div>
  );
}

export default App;
