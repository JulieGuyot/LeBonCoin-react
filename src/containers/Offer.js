import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import axios from "axios";
import DetailedAdvert from "../components/DetailedAdvert";

const Offer = () => {
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const token = Cookies.get("token");

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-julie.herokuapp.com/offer/" + id
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
    <div className="all-offer">
      <DetailedAdvert
        image={data.picture.url}
        title={data.title}
        price={data.price}
        creation={data.created}
        description={data.description}
      />{" "}
      {token ? (
        <button
          onClick={() => {
            history.push("/payment", {
              title: data.title,
              price: data.price,
              description: data.description,
              img: data.picture.url,
            });
          }}
          className="buy-button"
        >
          Acheter
        </button>
      ) : (
        <Link to="/log-in" className="buy-button">
          Acheter
        </Link>
      )}
    </div>
  );
};
export default Offer;
