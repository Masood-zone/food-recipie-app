import { foodApi } from "../../redux/hook";
import MenuItem from "./menuItem";

function FoodDisplay({ category }) {
  const { data, isLoading } = foodApi.useGetFoodsQuery();
  const filterRecipes = () => {
    if (category === null) {
      return data?.recipes;
    } else {
      return data?.recipes.filter((recipe) => recipe.categoryId === category);
    }
  };
  const recipes = filterRecipes();

  return (
    <div className="mt-7">
      <h1 className="text-[2vw] max-md:text-xl font-semibold">
        Here are our Top picks
      </h1>
      {/* Food list */}
      <div className="grid grid-cols-4 gap-7 mt-7 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {isLoading ? (
          <div className="loader"></div>
        ) : recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <MenuItem
              key={index}
              id={recipe.id}
              name={recipe.title}
              description={recipe.description}
              image={recipe.image}
            />
          ))
        ) : (
          <div className="no-data">
            <h3>No data available</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default FoodDisplay;
