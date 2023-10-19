import React from "react";
import AvailableItems from "./AvailableItems";
import TechItemsSummary from "./techItemsSummary";

const TechItems = () => {
  return (
    <div >
      <TechItemsSummary />
      <AvailableItems />
    </div>
  );
};

export default TechItems;
