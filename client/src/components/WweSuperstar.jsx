import React from "react";

function WweSuperstar({ _id, wwename, finisher, aka, thumbnail }) {
  return (
    <div className="border border-gray-400 m-3 rounded-lg shadow-lg p-4 cursor-pointer text-center from bg-black text-white">
      <img src={thumbnail} alt="Superstarimg" className="h-[270px] w-[390px] object-cover rounded-lg shadow-lg border-2 border-white "/>
      <h2 className="text-2xl font-semibold text-yellow-300">{wwename}</h2>
      <p className="text-xl  text-yellow-400 ">{aka} </p>
      <h3 className="text-md font-medium ">{finisher}</h3>
    
   
    </div>
  );
}

export default WweSuperstar;
