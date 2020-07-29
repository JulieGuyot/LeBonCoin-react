import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Advert from "../components/Advert";
import Search from "../components/Search";

import Logo from "../logo.jpg";
const Offers = ({ data }) => {
  return (
    <>
      <Search />
      {data.offers.map((element, index) => {
        return (
          <div>
            <Link to={`/offer/${element._id}/`}>
              <Advert
                image={element.picture.url}
                title={element.title}
                price={element.price}
                creation={element.created}
              />
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Offers;
