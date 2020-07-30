import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../logo.jpg";
import Cookies from "js-cookie";

const Header = ({ user, setUser }) => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="left-part">
        <img className="logo" alt="logo" src={Logo} />
        <button className="new-offer">Déposer une annonce</button>
        <button className="research">Rechercher</button>
      </div>
      <div className="right-part">
        {user === null ? (
          <Link className="to-connect" to="/log-in" className="to-connect">
            Se Connecter
          </Link>
        ) : (
          <button
            className="to-connect"
            onClick={() => {
              Cookies.remove("token");
              setUser(null);
              history.push("/offers");
            }}
          >
            Se déconnecter
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
