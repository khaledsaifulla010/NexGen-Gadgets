import AllProducts from "../AllProducts/AllProducts";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div className="mt-24 ">
      <Helmet>
        <title>NextGen Gadgets || Home</title>
      </Helmet>

      <Banner></Banner>
      <AllProducts></AllProducts>
    </div>
  );
};

export default Home;
