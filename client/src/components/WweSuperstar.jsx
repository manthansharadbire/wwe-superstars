import React from "react";

function WweSuperstar({ _id, wwename, height, finisher, aka, thumbnail }) {
  return (
    <div>
      <img src={thumbnail} alt="" />
      <h2>{wwename}</h2>
      <h2>{height}</h2>
      <h3>{finisher}</h3>
      <p>{aka}</p>
    </div>
  );
}

export default WweSuperstar;
