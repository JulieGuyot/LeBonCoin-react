import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import DetailedAdvert from "../components/DetailedAdvert";

const Offer = () => {
  const { id } = useParams();

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
    <div>
      {data.offers.map((element, index) => {
        if (element._id === id) {
          return (
            <div>
              <DetailedAdvert
                image={element.picture.url}
                title={element.title}
                price={element.price}
                creation={element.created}
                description={element.description}
              />
            </div>
          );
        }
      })}
    </div>
  );
};
export default Offer;
