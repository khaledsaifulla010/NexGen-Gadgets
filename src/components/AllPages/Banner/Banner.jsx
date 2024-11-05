import { Link } from "react-router-dom";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative bg-purple-500 w-[1300px] -top-24   h-[600px] rounded-b-lg mb-36">
      <div>
        <h1 className="p-8 text-center text-6xl font-black text-white absolute mt-24 ml-20">
          Upgrade Your Tech Accessorize with <br /> NextGen Gadget Accessories
        </h1>
        <p className=" text-center text-lg  text-white absolute mt-[270px] ml-[270px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>

        <Link to={"/dashboard"}>
          <button className="text-base border-2 p-2 rounded-3xl bg-white text-purple-600  font-black absolute mt-[350px] ml-[580px]">
            Shop Now
          </button>
        </Link>
      </div>
      <div className=" border-white  rounded-3xl border-[30px] ml-[120px] absolute -bottom-72 ">
        <img className="rounded-3xl h-[400px] w-[1000px]" src={banner} />
      </div>
    </div>
  );
};

export default Banner;
