import { useLoaderData, useParams } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
const ProductDetails = () => {
  const allProducts = useLoaderData();
  // console.log(allProducts);

  const { product_id } = useParams();
  // console.log(product_id);

  const id = parseInt(product_id);
  console.log(typeof id);

  const product = allProducts.find((product) => product.product_id === id);
  console.log(product);

  const {
    product_title,
    product_image,
    price,
    availability,
    description,
    specification,
    rating,
  } = product;

  return (
    <div>
      <div className="mb-36">
        <div className="hero w-[1300px] bg-purple-500 mt-12 rounded-xl h-[400px]">
          <div className="">
            <div className>
              <h1 className="text-3xl text-white font-bold text-center -mt-28">
                Product Details
              </h1>
              <p className="py-6 text-center text-white font-semibold">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to <br /> the coolest
                accessories, we have it all!
              </p>
            </div>
          </div>
        </div>
        <div className="  h-[550px] border-2 w-[1150px] rounded-xl mt-12">
          <div className="flex items-start  mt-6  gap-4 ml-6">
            <img className="border-2 rounded-xl" src={product_image} />
            <div>
              <h1 className="text-3xl font-black">{product_title}</h1>
              <h1 className="text-xl font-bold text-slate-600 mt-4">
                Price : ${price}
              </h1>
              <h1 className="border-2 p-1 rounded-full text-base font-bold w-[120px] text-center text-green-500 border-green-500 mt-4">
                {availability ? "InStock" : "Out Of Stock"}
              </h1>
              <h1 className="mt-4 text-lg font-bold text-justify text-slate-400 mr-2">
                {description}
              </h1>
              <h1 className="mt-4 text-xl font-bold ">Specifications : </h1>
              <div className="mt-2 text-slate-500 font-bold">
                {specification.map((specific, index) => (
                  <ol>
                    {index + 1}. {specific}
                  </ol>
                ))}
              </div>
              <h1 className="mt-4 text-xl font-bold ">Rating </h1>

              <div className="flex items-center gap-4">
                <div className="rating mt-4">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <div>
                  <h1 className="badge mt-5 text-base p-2 border-2 font-bold text-slate-600">
                    {rating}
                  </h1>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <button className="flex items-center gap-2 text-lg border-2 p-2 rounded-full bg-purple-500 font-black text-white">
                  Add To Cart <FaShoppingCart></FaShoppingCart>
                </button>
                <button className="text-lg">
                  <FaHeart></FaHeart>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;
