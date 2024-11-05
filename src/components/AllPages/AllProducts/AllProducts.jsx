import { useEffect, useState } from "react";
import AllProductsCard from "../AllProductsCard/AllProductsCard";

const AllProducts = () => {
  const [showProducts, setShowProducts] = useState("all");
  const [allProducts, setAllProducts] = useState([]);

  const [allLaptops, setAllLaptops] = useState([]);
  const [allPhones, setAllPhones] = useState([]);
  const [allAccessories, setAllAccessories] = useState([]);
  const [allSmartwatches, setAllSmartwatches] = useState([]);
  const [allMacbooks, setAllMacbooks] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((res) => {
        setAllProducts(res);
        setAllLaptops(res.filter((product) => product.category === "Laptops"));
        setAllPhones(res.filter((product) => product.category === "Phones"));
        setAllAccessories(
          res.filter((product) => product.category === "Accessories")
        );
        setAllSmartwatches(
          res.filter((product) => product.category === "Smartwatch")
        );
        setAllMacbooks(res.filter((product) => product.category === "MacBook"));
      });
  }, []);

  const handleAllProducts = () => {
    setShowProducts("all");
  };
  const handleAllLaptops = () => {
    setShowProducts("Laptops");
  };
  const handleAllPhones = () => {
    setShowProducts("Phones");
  };
  const handleAllAccessories = () => {
    setShowProducts("Accessories");
  };
  const handleAllSmartwatches = () => {
    setShowProducts("Smartwatches");
  };
  const handleAllMacbooks = () => {
    setShowProducts("Macbooks");
  };

  const displayedProducts =
    showProducts === "all"
      ? allProducts
      : showProducts === "Laptops"
      ? allLaptops
      : showProducts === "Phones"
      ? allPhones
      : showProducts === "Accessories"
      ? allAccessories
      : showProducts === "Smartwatches"
      ? allSmartwatches
      : allMacbooks;

  return (
    <div>
      <h1 className="text-4xl font-black text-center">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="mt-36 flex gap-12 mb-24">
        <div className="border-2 w-[200px] h-[450px] p-2 rounded-2xl">
          <button
            onClick={handleAllProducts}
            className={`w-full p-2 rounded-xl font-black mt-4 ${
              showProducts === "all"
                ? "bg-purple-500 text-white"
                : "bg-slate-100"
            }`}
          >
            All Products
          </button>
          <button
            onClick={handleAllLaptops}
            className={`w-full p-2 rounded-xl font-black mt-8 ${
              showProducts === "Laptops"
                ? "bg-purple-500 text-white"
                : "bg-slate-100"
            }`}
          >
            Laptops
          </button>
          <button
            onClick={handleAllPhones}
            className={`w-full p-2 rounded-xl font-black mt-8 ${
              showProducts === "Phones"
                ? "bg-purple-500 text-white"
                : "bg-slate-100"
            }`}
          >
            Phones
          </button>
          <button
            onClick={handleAllAccessories}
            className={`w-full p-2 rounded-xl font-black mt-8 ${
              showProducts === "Accessories"
                ? "bg-purple-500 text-white"
                : "bg-slate-100"
            }`}
          >
            Accessories
          </button>
          <button
            onClick={handleAllSmartwatches}
            className={`w-full p-2 rounded-xl font-black mt-8 ${
              showProducts === "Smartwatches"
                ? "bg-purple-500 text-white"
                : "bg-slate-100"
            }`}
          >
            Smartwatch
          </button>
          <button
            onClick={handleAllMacbooks}
            className={`w-full p-2 rounded-xl font-black mt-8 ${
              showProducts === "Macbooks"
                ? "bg-purple-500 text-white"
                : "bg-slate-100"
            }`}
          >
            Macbooks
          </button>
        </div>

        <div className="w-[1100px] h-full">
          <div className="grid grid-cols-3 gap-8">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <AllProductsCard
                  product={product}
                  key={product.product_id}
                ></AllProductsCard>
              ))
            ) : (
              <p className="text-center text-3xl font-bold">
                No Data Available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
