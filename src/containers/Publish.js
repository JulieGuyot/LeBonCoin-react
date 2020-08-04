import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Publish = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState();

  const token = Cookies.get("token");

  return (
    <div className="publish-page">
      <form
        className="publish-form"
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData();
          formData.append("title", title);
          formData.append("description", description);
          formData.append("price", price);
          formData.append("picture", file);

          const response = await axios.post(
            "https://leboncoin-julie.herokuapp.com/offer/publish",
            formData,
            { headers: { authorization: "Bearer " + token } }
          );
          if (token) {
            const id = response.data._id;
            history.push("/offer/" + id);
          } else {
            history.push("/log-in");
          }
        }}
      >
        <div className="publish-title">Déposer une annonce</div>
        <h3>Titre de l'annonce *</h3>
        <input
          className="publish-input-title"
          type="text"
          onChange={(event) => setTitle(event.target.value)}
        />
        <h3>Texte de l'annonce *</h3>
        <input
          className="publish-input-text"
          type="text"
          onChange={(event) => setDescription(event.target.value)}
        />
        <h3>Prix *</h3>
        <input
          className="publish-input-price"
          type="number"
          onChange={(event) => setPrice(event.target.value)}
        />
        <h3>Photo *</h3>
        <input
          className="publish-photo"
          type="file"
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
        />
        <br />
        <input className="valid-button" type="submit" value="Valider" />
      </form>
    </div>
  );
};

export default Publish;
