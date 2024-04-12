import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-[34vw] my-8 mx-auto bg-header-img relative rounded-2xl overflow-hidden max-xl:h-[315px] max-sm:h-[350px]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[95%] max-lg:p-1 max-md:p-1 max-sm:p-1 h-auto p-10 top-5 left-[2vw] header-animation ">
        <h1 className="font-medium text-white text-responsive leading-tight max-sm:text-3xl">
          Check out our awesome recipie app{" "}
          <span className=" font-bold">Meals</span>
        </h1>
        <p className="text-white text-[20px] max-md:text-base py-5">
          Choose from a variety of recipies and get cooking! With our easy to
          follow recipies, you'll be cooking like a pro in no time. Our mission
          is to make cooking fun and easy for everyone, one recipie at a time.
        </p>
        <button className="border-none text-dark-blue font-medium mt-2 max-xl:m-0 p-[1vw] px-[2.3vw] bg-white rounded-full">
          <Link to="#menu">View Menu</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
