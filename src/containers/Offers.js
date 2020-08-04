import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Advert from "../components/Advert";
import Search from "../components/Search";

const Offers = ({ data, setData }) => {
  return (
    <>
      <div className="orange-part-1"></div>
      <div className="orange-part-2"></div>

      <Search setData={setData} />

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
