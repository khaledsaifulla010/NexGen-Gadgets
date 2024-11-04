import { Link } from "react-router-dom";


const AllProductsCard = ({product}) => {
   const { product_id, product_title, product_image, price } = product;

  return (
    <div>
      <div className="card bg-base-100 w-[350px] h-[550px] border-2">
        <img className="p-2 w-[340px] h-[300px]" src={product_image} />
        <div className="divider p-2 "></div>
        <div className="card-body">
          <h2 className="text-2xl font-black">{product_title}</h2>
          <p className="text-lg font-bold text-slate-500">Price : {price} $ </p>
          <div className="card-actions">
            <button className="w-full mt-4">
              <Link to={`product/${product_id}`}>
                <div class="relative p-1  bg-gradient-to-r from-purple-400 via-pink-500 to-pink-500  rounded-3xl">
                  <div class="flex items-center justify-center  bg-white rounded-3xl">
                    <h1 className="p-2 font-black text-purple-700">
                      View Details
                    </h1>
                  </div>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsCard;