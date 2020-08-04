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
    <div>
      <DetailedAdvert
        image={data.picture.url}
        title={data.title}
        price={data.price}
        creation={data.created}
        description={data.description}
      />
    </div>
  );
};
export default Offer;
