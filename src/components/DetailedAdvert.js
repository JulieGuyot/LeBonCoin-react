import React from "react";

const DetailedAdvert = ({ title, price, image, creation, description }) => {
  return (
    <div className="detailedOffer">
      <div className="part-1">
        <img
          className="detailed-offer-photo"
          alt="photo de l'annonce"
          src={image}
        />
        <div className="detailed-offer-title">{title}</div>
        <div className="detailed-offer-price">{price} €</div>
        <div className="detailed-offer-creation">
          {creation.slice(0, 10)} | {creation.slice(11, 16)}
        </div>
      </div>
      <div className="part-2">
        <div className="description">Description </div>
        <div className="detailed-offer-description">{description}</div>
      </div>
    </div>
  );
};
export default DetailedAdvert;
