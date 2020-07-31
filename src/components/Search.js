import React from "react";
const Search = () => {
  return (
    <>
      <div className="orange-part"></div>
      <form className="search-form">
        <div className="search-part-1">
          <input
            className="input-search"
            placeholder="Que recherchez-vous?"
            type="text"
            onChange={() => {}}
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
