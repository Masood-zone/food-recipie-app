import React from "react";
import { group_members_data } from "../../assets/data";
import AboutTable from "../../components/table/aboutTable";

function AboutUs() {
  return (
    <div className="h-full">
      <h1 className="text-5xl text-center py-5 font-bold max-sm:text-2xl">
        About Us
      </h1>
      <AboutTable data={group_members_data} />
    </div>
  );
}

export default AboutUs;
