import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      console.log(data);
      setProducts(data.products);
      console.log(products);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <h1 className="mt-14 text-center text-3xl font-serif">
        Data Fetching With Axios
      </h1>

      <div className="grid grid-cols-5 w-[80%] mx-auto my-14 gap-5">
        {products?.map((pd) => (
          <Cards key={pd.id} pd={pd} />
        ))}
      </div>
    </div>
  );
};

export default App;
