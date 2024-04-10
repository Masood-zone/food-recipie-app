import React from "react";
import { webIcon1, webIcon2 } from "../../assets/svgs";

function BetterExperience() {
  return (
    <div className="m-auto my-24 text-web-text p-6" id="web-app">
      <p className="text-center font-medium">
        For Better Experience, sign in to our Web App
      </p>
      <div className="flex gap-web-link mt-10 items-center justify-center">
        <img
          src={webIcon1}
          alt="web-app-platform-icon"
          className="max-w-44 transition-all w-app-width hover:scale-web-scale cursor-pointer mx-5"
        />
        <img
          src={webIcon2}
          alt="web-app-platform-icon"
          className="max-w-44 transition-all w-app-width hover:scale-web-scale cursor-pointer mx-5"
        />
      </div>
    </div>
  );
}

export default BetterExperience;
