import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function RecipieView() {
  const { id } = useParams();
  const { recipieList } = useSelector((state) => state.recipie);

  const singleRecipie = recipieList.find((item) => item._id === id);
  console.log("Found it", singleRecipie);

  return <div>RecipieView</div>;
}

export default RecipieView;
