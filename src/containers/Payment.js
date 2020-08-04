import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import PaymentForm from "../components/PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51HCOwQI370JhH8HrMo2VvtvYyEndN5yV7tZEqtW0hURFl3NSKlbkTGlXbjiG96d9mnvj3dFMwcSndsSqoSQUjOtm00SDODdylV"
);

const Payment = () => {
  const token = Cookies.get("token");
  const username = Cookies.get("username");
  const location = useLocation();
  console.log("location=", location);
  let { img, price, title, description } = location.state;
  return token ? (
    <div className="payment">
      <span className="buy">Acheter en ligne</span>
      <img src={img} />

      <div className="detailed-offer-title">{title}</div>
      <div className="detailed-offer-price"> {price} euros</div>
      <div className="detailed-offer-creation">{description}</div>

      <Elements stripe={stripePromise}>
        <PaymentForm
          className="payment-form"
          username={username}
          title={title}
          price={price}
          description={description}
        />
      </Elements>
    </div>
  ) : (
    <Redirect to="/log_in" />
  );
};
export default Payment;
