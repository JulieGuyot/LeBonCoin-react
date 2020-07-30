import React, { useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Signup = ({ setUser }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        if (password === passwordConfirm) {
          const response = await axios.post(
            "https://leboncoin-julie.herokuapp.com/user/sign_up",
            {
              email: email,
              password: password,
              account: { username: username },
            }
          );
          console.log(response.data);
          const token = response.data.token;
          Cookies.set("token", token);
          setUser({ token: token });
          history.push("/offers");
        } else {
          alert("Les mots de passe doivent être identiques");
        }
      }}
    >
      <div> Nom</div>
      <input
        type="text"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />{" "}
      <br />
      <div>Email</div>
      <input
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />{" "}
      <br />
      <div> Mot de passe</div>
      <input
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />{" "}
      <br />
      <div>Confirmez votre mot de passe</div>
      <input
        type="password"
        value={passwordConfirm}
        onChange={(event) => {
          setPasswordConfirm(event.target.value);
        }}
      />{" "}
      <br />
      <button className="register-button" type="submit">
        Créer mon compte personnel
      </button>
    </form>
  );
};
export default Signup;
