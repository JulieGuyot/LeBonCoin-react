import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = ({ username }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setComplete] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);
    const stripeResponse = await stripe.createToken(cardElement, {
      name: username,
    });

    const response = await axios.post(
      "https://leboncoin-julie.herokuapp.com/payment",
      {
        stripeToken: stripeResponse.token.id,
      }
    );

    if (response.status === 200) {
      setComplete(true);
    } else {
      console.log("error message");
    }
  };

  return (
    <div>
      {completed ? (
        <p>Paiement effectué </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <input type="submit" value="Valider" />
        </form>
      )}
    </div>
  );
};

export default PaymentForm;
