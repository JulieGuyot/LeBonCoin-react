import React, { useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="all">
      <form
        className="form"
        onSubmit={async (event) => {
          event.preventDefault();
          const response = await axios.post(
            "https://leboncoin-julie.herokuapp.com/user/log_in",
            {
              email: email,
              password: password,
            }
          );
          console.log(response.data);
          if (response.data.token) {
            const token = response.data.token;
            Cookies.set("token", token);
            setUser({ token: token });
            history.push("/offers");
          } else {
            alert("Problème d'identification");
          }
        }}
      >
        <div className="form-title"> Connexion</div>
        <div className="subtitle">Adresse email</div>
        <input
          className="input-connect"
          placeholder="email"
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <div className="subtitle">Mot de passe</div>
        <input
          className="input-connect"
          placeholder="password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <button className="submit" type="submit">
          {" "}
          Se Connecter{" "}
        </button>
        <span className="subtitle-2">Vous n'avez pas de compte ?</span>
        <button
          className="button-create"
          onClick={() => {
            history.push("/sign-up");
          }}
        >
          Créer un compte
        </button>
      </form>
    </div>
  );
};
export default Login;
