import { useEffect } from "react";
import { useState } from "react";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((res) => setAllProducts(res));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-black text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div>
        <h1>Products : {allProducts.length} </h1>
      </div>
    </div>
  );
};

export default AllProducts;
