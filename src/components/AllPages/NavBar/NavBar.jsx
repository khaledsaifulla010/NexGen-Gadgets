import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./NavBar.css";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <div className="navbar flex items-center justify-between ">
        <div className="">
          <Link to={"/"} className="flex items-center gap-2">
            <img className="w-8 mt-1" src={logo} />
            <a className="text-4xl font-black">
              NexGen <span className="text-orange-600">Gadgets</span>
            </a>
          </Link>
        </div>
        <div>
          <ul className="menu menu-horizontal px-1 gap-16 navbar-center  mr-36 font-semibold text-lg">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/statistics"}>Statistics</NavLink>
            <NavLink to={"dashboard"}>Dashboard</NavLink>
            {/* <NavLink>Soon</NavLink> */}
          </ul>
        </div>
        <div className="dropdown  dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="text-2xl text-orange-600 flex"
          >
            <FaShoppingCart></FaShoppingCart>
            <div className="badge -mt-2 absolute ml-3 font-black">+99</div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 border-2 shadow"
          >
            <h1>Work Soon!</h1>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
