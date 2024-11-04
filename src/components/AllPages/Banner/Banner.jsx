import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="absolute w-full -top-24 -z-10 -ml-28">
      <div className="bg-purple-500 h-[900px] ">
        <h1 className="p-8 text-center text-6xl font-black text-white absolute mt-64 ml-36">
          Upgrade Your Tech Accessorize with <br /> NextGen Gadget Accessories
        </h1>
        <p className=" text-center text-lg  text-white absolute mt-[450px] ml-[350px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>

        <button className="text-base border-2 p-2 rounded-3xl bg-white text-purple-600  font-black absolute mt-[550px] ml-[650px]">
          Shop Now
        </button>
      </div>
      <div className=" border-white  rounded-3xl border-[30px] ml-56 absolute -bottom-56 ">
        <img className="rounded-3xl h-[400px] w-[1000px]" src={banner} />
      </div>
    </div>
  );
};

export default Banner;
