import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function RecipieView() {
  const { id } = useParams();
  const { recipieList } = useSelector((state) => state.recipie);
  const singleRecipie = recipieList.find((item) => item.id === id);
  return (
    <div className="h-screen mt-10">
      <h1 className="text-5xl max-lg:text-lg max-md:text-3xl max-sm:text2xl text-center py-5 font-bold">
        {singleRecipie.name} Recipie
      </h1>
      {/* Recipie Container */}
      <article className="flex my-5 w-full max-lg:flex-col max-lg:w-full ">
        {/* Recipie Overview */}
        <div className="flex flex-col w-[30%] max-lg:w-full p-5 justify-center items-start gap-3 max-lg:items-center">
          <div className="w-auto">
            <img
              src={singleRecipie.image}
              alt={singleRecipie.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full max-lg:text-center">
            <h1 className="text-3xl my-2 font-medium">{singleRecipie.name}</h1>
            <p className="text-base">{singleRecipie.description}</p>
            <p className="text-base badge badge-neutral">
              {singleRecipie.category}
            </p>
          </div>
        </div>
        {/* Recipie List */}
        <div className="flex  w-[70%] max-lg:justify-between max-lg:flex-row max-lg:w-full p-5 justify-center items-start gap-3 max-lg:gap-5 ">
          {/* Ingredients */}
          <div className="w-80">
            <h1 className="text-2xl font-medium">Ingredients</h1>
            <ul>
              {singleRecipie.ingredients.map((item) => (
                <li key={item.id} className="text-lg py-2">
                  {item.ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-80">
            <h1 className="text-2xl font-medium">Instructions</h1>
            <ol>
              {singleRecipie.instructions.map((item) => (
                <li key={item.id} className="text-lg py-2">
                  {item.instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </div>
  );
}

export default RecipieView;
