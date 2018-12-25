import React from "react";
import HogCard from "../components/HogCard";

const HogList = props => {
  console.log("Props in HogList is:", props.hogs);
  const hogs = props.hogs;
  const hogsMap = hogs.map(hog => {
    return <HogCard key={hog.name} hog={hog} />;
  });

  return <div className="ui cards">{hogsMap}</div>;
};

export default HogList;
