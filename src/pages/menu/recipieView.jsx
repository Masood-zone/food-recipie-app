import { useParams } from "react-router-dom";
import { foodApi } from "../../redux/hook";

function RecipieView() {
  const { id } = useParams();
  const { data } = foodApi.useGetFoodsQuery();
  const singleRecipie = data?.recipes?.find((item) => item.id === id);
  console.log(singleRecipie);
  return (
    <div className="h-screen mt-10">
      <h1 className="text-5xl max-lg:text-lg max-md:text-3xl max-sm:text2xl text-center py-5 font-bold">
        {singleRecipie.title} Recipie
      </h1>
      {/* Recipie Container */}
      <article className="my-5 w-full max-lg:w-full ">
        {/* Recipie Overview and List */}
        <div className="flex h-auto gap-10 max-lg:w-full px-3 py-3 justify-start  items-start max-lg:items-center max-lg:flex-col">
          <div className="">
            <img
              src={singleRecipie.image}
              alt={singleRecipie.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full max-lg:text-center">
            <div>
              <h1 className="text-3xl my-2 font-medium">
                {singleRecipie.title}
              </h1>
              <p className="text-base my-2">{singleRecipie.description}</p>
              <div>
                <p className="text-lg">Check out places to buy:</p>
                <button
                  className="btn btn-square bg-[#1F2937] hover:bg-[#364c6a] text-white w-20"
                  onClick={() => ""}
                >
                  Check it
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default RecipieView;
