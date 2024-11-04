import { useEffect } from "react";
import { useState } from "react";
import AllProductsCard from "../../AllProductsCard/AllProductsCard";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((res) => setAllProducts(res));
  }, []);

  const handleAllProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div>
      <h1 className="text-4xl font-black text-center">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="mt-36 flex gap-12 mb-24">
        <div className="border-2 w-[200px] h-[400px] ">
          <button
            onClick={handleAllProducts}
            className="border-2 p-2 rounded-xl bg-slate-200 font-black mt-8 ml-10"
          >
            AllProducts
          </button>
        </div>

        <div className=" w-[1100px] h-full">
          <div className=" grid grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <AllProductsCard
                product={product}
                key={product.product_id}
              ></AllProductsCard>
            ))}
          </div>
          {showProducts && (
            <div className=" grid grid-cols-3 gap-8">
              {allProducts.map((product) => (
                <AllProductsCard
                  product={product}
                  key={product.product_id}
                ></AllProductsCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
