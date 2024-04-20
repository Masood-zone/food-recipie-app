import React from "react";
import { useSelector } from "react-redux";
import { foodApi } from "../../redux/hook";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ExploreMenu({ category, setCategory }) {
  const { data, isLoading } = foodApi.useGetCategoriesQuery();
  return (
    <div className="flex flex-col gap-5 w-full" id="menu">
      <h1 className="font-medium text-gray-800 text-2xl max-md:text-lg">
        Explore Our Menu
      </h1>
      <p className=" text-gray-800">
        Choose from a diverse menu featuring a delectable array of dishes.{" "}
        <span className="block max-xl:inline">
          Our mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </span>
      </p>

      <div className="flex justify-between items-center gap-7 text-center my-5 mx-0 overflow-x-scroll menu-list-overflow overflow-hidden">
        {isLoading ? (
          <div className="loader"></div>
        ) : data?.cartegories.length > 0 ? (
          data?.cartegories?.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setCategory((prevCategory) =>
                    prevCategory === item.id ? null : item.id
                  );
                }}
                key={index}
                className="cursor-pointer"
              >
                <LazyLoadImage
                  className={`w-16 h-auto min-w-20 rounded-full transition-all duration-200 skeleton ${
                    category === item.id ? "border-4 border-[#ff6347] p-1" : ""
                  }`}
                  src={item.image}
                  alt=""
                />
                <p className="mt-2 text-gray-700 text-base cursor-pointer">
                  {item.type}
                </p>
              </div>
            );
          })
        ) : (
          <div>
            <p>No categories found</p>
          </div>
        )}
      </div>
      <hr className="my-2 h-0.5 bg-gray-200 border-none" />
    </div>
  );
}

export default ExploreMenu;
