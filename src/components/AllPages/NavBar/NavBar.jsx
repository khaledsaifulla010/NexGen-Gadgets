import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="navbar flex items-center justify-between">
        <div className="">
          <Link to={"/"} className="flex items-center gap-2">
            <img className="w-8 mt-1" src={logo} />
            <a className="text-4xl font-black">
              NexGen <span className="text-orange-600">Gadgets</span>
            </a>
          </Link>
        </div>
        <div className="navbar-center ">
          <ul className="menu menu-horizontal px-1 gap-16  font-semibold text-lg">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/statistics"}>Statistics</NavLink>
            <NavLink to={"dashboard"}>Dashboard</NavLink>
            {/* <NavLink>Soon</NavLink> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
