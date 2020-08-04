import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../logo.jpg";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ user, setUser }) => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header-container">
        <div className="left-part">
          <Link to="/offers">
            <img className="logo" alt="logo" src={Logo} />
          </Link>
          <Link to="/publish">
            <button className="new-offer">
              <FontAwesomeIcon className="square" icon="plus-square" />
              Déposer une annonce
            </button>
          </Link>
          <button className="research">
            {" "}
            <FontAwesomeIcon className="search" icon="search" />
            Rechercher
          </button>
        </div>
        <div className="right-part">
          {user === null ? (
            <Link className="to-connect" to="/log-in">
              <div>
                <FontAwesomeIcon className="user" icon="user" />
              </div>{" "}
              <br />
              <div>Se connecter</div>
            </Link>
          ) : (
            <button
              className="to-disconnect"
              onClick={() => {
                Cookies.remove("token");
                setUser(null);
                history.push("/offers");
              }}
            >
              <div>
                <FontAwesomeIcon className="user" icon="user" />
              </div>{" "}
              Se déconnecter
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
