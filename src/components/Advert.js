import React from "react";

const Advert = ({ title, price, image, creation }) => {
  return (
    <div className="one-offer">
      <img className="photos-list" alt="photo de l'annonce" src={image} />
      <div className="one-offer-text">
        <div className="one-offer-title">{title}</div>
        <div className="one-offer-price">{price} €</div>
        <div className="one-offer-creation">{creation}</div>
      </div>
    </div>
  );
};
export default Advert;
