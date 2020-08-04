import React, { useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = ({ setUser }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className="all-sign-up">
      <div className="sign-up-text">
        <h2>Pourquoi créer un compte ?</h2>
        <div>
          <h3>Gagnez du temps</h3>
          <div className="sign-up-section">
            <FontAwesomeIcon className="clock" icon="clock" />
            <div>
              Publiez vos annonces rapidement avec vos informations pré-remplies
              chaque fois que vous souhaitez déposer une nouvelle annonce.
            </div>
          </div>
        </div>
        <div>
          <h3>Soyez les premiers informés</h3>
          <div className="sign-up-section">
            <FontAwesomeIcon className="bell" icon="bell" />
            <div>
              Créez des alertes Immo ou Emploi et ne manquez jamais l'annonce
              qui vous intéresse.
            </div>
          </div>
        </div>
        <div>
          <h3>Visibilité</h3>
          <div className="sign-up-section">
            <FontAwesomeIcon className="eye" icon="eye" />
            <div>
              Suivez les statistiques de vos annonces (nombre de fois où votre
              annonce a été vue, nombre de contacts reçus).
            </div>
          </div>
        </div>
      </div>

      <form
        className="sign-up-form"
        onSubmit={async (event) => {
          event.preventDefault();
          if (!username || !email || !password || !passwordConfirm) {
            alert("Veuillez remplir tous les champs");
          } else if (password !== passwordConfirm) {
            alert("Les mots de passe doivent être identiques");
          } else if (checkbox === false) {
            alert("Veuillez accepter les CGV et CGU");
          } else {
            const response = await axios.post(
              "https://leboncoin-julie.herokuapp.com/user/sign_up",
              {
                email: email,
                password: password,
                account: { username: username },
              }
            );
            if (response.data.token) {
              history.push("/offers");
            }
          }
        }}
      >
        <div className="creation-title">Créez un compte</div>
        <div>Pseudo *</div>
        <input
          className="input-create-count"
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />{" "}
        <br />
        <div>Adresse email *</div>
        <input
          className="input-create-count"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />{" "}
        <br />
        <div className="passwords">
          <div className="password">
            <div> Mot de passe *</div>
            <input
              className="input-create-count"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />{" "}
            <br />
          </div>
          <div className="confirmPassword">
            <div>Confirmer votre mot de passe *</div>
            <input
              className="input-create-count"
              type="password"
              value={passwordConfirm}
              onChange={(event) => {
                setPasswordConfirm(event.target.value);
              }}
            />{" "}
            <br />
          </div>
        </div>
        <div className="checkbox">
          <input
            className="box"
            type="checkbox"
            onChange={() => setCheckbox(true)}
          ></input>
          <div className="condition">
            "J'accepte les Conditions Générales de Vente et les Conditions
            Générales d'Utilisation"
          </div>
        </div>
        <button className="register-button" type="submit">
          Créer mon compte personnel
        </button>
      </form>
    </div>
  );
};
export default Signup;
