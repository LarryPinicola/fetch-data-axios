import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Cards = ({ pd }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="my-3 p-5 rounded-lg shadow-lg">
      {loading ? <Skeleton /> : `${pd.title.substring(0, 15)}`}

      <div className=" w-full mx-auto">
        {loading ? (
          <Skeleton className="h-24" />
        ) : (
          <img
            src={pd.thumbnail}
            alt=""
            className="h-28 object-contain rounded"
          />
        )}
      </div>
      <div className="mt-2 flex justify-between items-center">
        {loading ? (
          <Skeleton className=" w-10" />
        ) : (
          <div className="text-sm font-semibold text-green-600">{pd.price}</div>
        )}

        {loading ? (
          <Skeleton className="w-10" />
        ) : (
          <div className="text-sm ">{pd.brand}</div>
        )}
      </div>
    </div>
  );
};

export default Cards;
