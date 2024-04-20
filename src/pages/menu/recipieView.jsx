import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function RecipieView() {
  const { id } = useParams();
  const { recipieList } = useSelector((state) => state.recipie);
  const singleRecipie = recipieList.find((item) => item.id === id);
  console.log("Recipe: ", singleRecipie);
  return (
    <div className="h-screen mt-10">
      <h1 className="text-5xl max-lg:text-lg max-md:text-3xl max-sm:text2xl text-center py-5 font-bold">
        {singleRecipie.name} Recipie
      </h1>
      {/* Recipie Container */}
      <article className="my-5 w-full max-lg:w-full ">
        {/* Recipie Overview and List */}
        <div className="flex h-auto gap-10 max-lg:w-full px-3 py-3 justify-start bg-slate-300 items-start max-lg:items-center">
          <div className="">
            <img
              src={singleRecipie.image}
              alt={singleRecipie.name}
              className="w-[600px] h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full max-lg:text-center">
            <div>
              <h1 className="text-3xl my-2 font-medium">
                {singleRecipie.name}
              </h1>
              <p className="text-base badge badge-neutral">
                {singleRecipie.category}
              </p>
              <p className="text-base my-2">{singleRecipie.description}</p>
            </div>
            {/* Recipie List */}
            <div className="flex w-full max-lg:justify-between max-lg:flex-row  max-lg:w-full justify-start items-start gap-3 max-lg:gap-5 ">
              {/* Ingredients */}
              <div className="w-80">
                <h1 className="text-2xl font-medium">Ingredients</h1>
                <ul className="list-disc">
                  {singleRecipie.ingredients.map((item) => (
                    <li key={item.id} className="text-lg py-2 ml-10">
                      {item.ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-80">
                <h1 className="text-2xl font-medium">Instructions</h1>
                <ul className="list-disc">
                  {singleRecipie.instructions.map((item) => (
                    <li key={item.id} className="text-lg py-2 ml-10">
                      {item.instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default RecipieView;
