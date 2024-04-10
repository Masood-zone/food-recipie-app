import React from "react";
import Header from "../../components/header";
import ExploreMenu from "../menu";
import FoodDisplay from "../menu/foodDisplay";
import BetterExperience from "./betterExperience";

function Home() {
  const [category, setCategory] = React.useState("All");
  return (
    <div className="px-3">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <BetterExperience />
    </div>
  );
}

export default Home;
