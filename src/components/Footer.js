import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
      Réplique de leboncoin - Codée par {props.name} - {props.lieu}
    </div>
  );
};
export default Footer;
