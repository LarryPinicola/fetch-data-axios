import React from "react";

const Cards = ({ pd }) => {
  return (
    <div className="my-3 p-5 rounded-lg shadow-lg">
      {pd.title.substring(0, 15)} ..
      <div className=" w-full mx-auto">
        <img
          src={pd.thumbnail}
          alt=""
          className="h-28 object-contain rounded"
        />
      </div>
      <div className="mt-2 flex justify-between items-center">
        <div className="text-sm font-semibold text-green-600">${pd.price}</div>
        <div className="text-sm ">{pd.brand}</div>
      </div>
    </div>
  );
};

export default Cards;
