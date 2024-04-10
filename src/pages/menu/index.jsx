import React from "react";
import { useSelector } from "react-redux";

function ExploreMenu({ category, setCategory }) {
  const { menuList } = useSelector((state) => state.recipie);
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
        {menuList?.map((item) => (
          <button
            key={item.id}
            className=""
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              className={`w-[7.5vw] min-w-20 rounded-full transition-all duration-200 cursor-pointer ${
                category === item.menu_name
                  ? "border-4 border-tomato rounded-full p-0.5"
                  : ""
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p className="mt-2 text-gray-600 cursor-pointer">
              {item.menu_name}
            </p>
          </button>
        ))}
      </div>
      <hr className="my-2 h-0.5 bg-gray-200 border-none" />
    </div>
  );
}

export default ExploreMenu;
