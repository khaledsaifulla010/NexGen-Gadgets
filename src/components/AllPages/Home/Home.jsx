import AllProducts from "../AllProducts/AllProducts";
import Banner from "../Banner/Banner";



const Home = () => {
    return (
      <div className="mt-24 ">
        <div>
          {/* <Banner></Banner> */}
        </div>
        <div>
          <AllProducts></AllProducts>

        </div>
      </div>
    );
};

export default Home;