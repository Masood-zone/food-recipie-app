import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[45%] h-[300px] shadow-lg rounded-lg flex items-center justify-center flex-col mx-auto">
      <h1 className="text-dark text-center text-3xl">
        Opps this page cannot be <span className="text-red-600">found!</span>
      </h1>
      <p className="mt-10">
        <Link to={navigate(-1)} className="text-blue-600 underline">
          Go Back
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
