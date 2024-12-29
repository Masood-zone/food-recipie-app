import React from "react";
import { Link } from "react-router-dom";
import { header } from "../../assets/svgs";

function MainLogo({ icon }) {
  return (
    <Link to="/" className="flex items-center gap-1">
      <img src={header} alt="main-logo" className="" />
      <span
        className={`font-bold text-lg  ${
          icon ? " text-white" : "text-dark-blue"
        }`}
      >
        Meals
      </span>
    </Link>
  );
}

export default MainLogo;
