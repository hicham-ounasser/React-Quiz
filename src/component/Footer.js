import React from "react";
import Timer from "./Timer";

const Footer = ({ dispatch, secondsRemaining }) => {
  return (
    <footer>
      <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
    </footer>
  );
};

export default Footer;
