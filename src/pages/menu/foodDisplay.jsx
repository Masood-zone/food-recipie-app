import MenuItem from "./menuItem";
import { useSelector } from "react-redux";

function FoodDisplay({ category }) {
  const { recipieList } = useSelector((state) => state.recipie);
  return (
    <div className="mt-7">
      <h1 className="text-[2vw] max-md:text-xl font-semibold">
        Here are our Top picks
      </h1>
      {/* Food list */}
      <div className="grid grid-cols-4 gap-7 mt-7 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {recipieList.map((recipie) => {
          if (category === "All" || recipie.category === category) {
            return (
              <MenuItem
                key={recipie.id}
                id={recipie.id}
                item={recipie}
                name={recipie.name}
                description={recipie.description}
                price={recipie.price}
                image={recipie.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
