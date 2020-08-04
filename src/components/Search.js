import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { set } from "js-cookie";
const Search = ({ setData }) => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://leboncoin-julie.herokuapp.com/offer/with-count?title=${search}`
    );
    setData(response.data);
  };
  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-part-1">
          <input
            className="input-search"
            placeholder="Que recherchez-vous?"
            type="text"
            onChange={(event) => setSearch(event.target.value)}
          ></input>
          <button className="submit" type="submit" value="Submit">
            Rechercher
          </button>
        </div>
        <div className="search-part-2">
          <div className="prix">
            <div className="search-text-1">Prix entre</div>
            <input
              className="prix-min"
              placeholder="prix min"
              type="text"
              onChange={() => {}}
            ></input>
            <div className="search-text-2">et</div>
            <input
              className="prix-max"
              placeholder="prix max"
              type="text"
              onChange={() => {}}
            ></input>
          </div>
          <input
            className="tri"
            placeholder="Tri : Plus récentes"
            type="text"
            onChange={() => {}}
          ></input>
        </div>
      </form>
    </>
  );
};

export default Search;
