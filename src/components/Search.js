import React from "react";

const Search = () => {
  return (
    <>
      <form className="form">
        <div className="search-part-1">
          <input
            placeholder="Que recherchez-vous?"
            type="text"
            onChange={() => {}}
          ></input>
          <button className="submit" type="submit" value="Submit">
            Rechercher
          </button>
        </div>
        <div className="search-part-2">
          Prix entre
          <input placeholder="prix min" type="text" onChange={() => {}}></input>
          et
          <input placeholder="prix max" type="text" onChange={() => {}}></input>
          <input
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
