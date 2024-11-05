import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./NavBar.css";
import { FaShoppingCart, FaHeart, FaDollarSign } from "react-icons/fa";
import { useCart, useWishList } from "../../Hooks/CartContext";

const NavBar = () => {
  // Use Use Location

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { cartItems } = useCart();
  const { wishListItems } = useWishList();

  const totalPrice = cartItems
    .map((item) => item.price)
    .reduce((sum, price) => sum + price, 0)
    .toFixed(2);
  console.log(totalPrice);

  return (
    <div>
      <div
        className={`navbar flex items-center justify-between ${
          isHomePage ? "bg-purple-500" : ""
        }`}
      >
        <div>
          <Link to={"/"} className="flex items-center gap-2">
            <img className="w-8 mt-1" src={logo} />
            <a className="text-4xl font-black">
              NexGen <span className="text-orange-600">Gadgets</span>
            </a>
          </Link>
        </div>
        <div>
          <ul className="menu menu-horizontal px-1 gap-16 navbar-center  mr-36 font-semibold text-lg">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-white underline" : "text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/statistics"}
              className={({ isActive }) =>
                isActive ? "text-black underline" : "text-black"
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to={"dashboard"}
              className={({ isActive }) =>
                isActive ? "text-black underline" : "text-black"
              }
            >
              Dashboard
            </NavLink>
            {/* <NavLink>Soon</NavLink> */}
          </ul>
        </div>
        <div className="dropdown  dropdown-end">
          <div tabIndex={0} role="button" className="text-2xl  flex mr-24">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge -mt-2 ml-3 absolute font-black">
              {cartItems.length}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-72 p-2 border-2 shadow"
          >
            <h1 className="text-xl font-bold mt-2 text-center">
              {cartItems.length} Items in Cart
            </h1>
            <div className="divider"></div>
            <h1 className="text-xl font-bold -mt-2 justify-center flex items-center text-purple-500">
              Total Price : <FaDollarSign className="mt-1"></FaDollarSign>
              {totalPrice}
            </h1>
            <Link to={"/dashboard"}>
              <button className="border-2 p-2 bg-purple-500 font-black rounded-full text-lg text-white mt-4 w-full">
                Dashboard
              </button>
            </Link>
          </ul>
        </div>
        <FaHeart className="text-2xl  flex absolute right-12 mr-24"></FaHeart>
        <div className="badge -mt-5 right-28  absolute font-black">
          {wishListItems.length}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
