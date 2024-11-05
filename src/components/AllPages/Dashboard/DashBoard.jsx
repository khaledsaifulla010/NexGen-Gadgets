import { useCart, useWishList } from "../../Hooks/CartContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdDeleteForever } from "react-icons/md";
import { FaDollarSign, FaSortAmountDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import group from "../../../assets/Group.png";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const { wishListItems, removeFromWishList } = useWishList();

  const [payment, setPayment] = useState(0);

  const [sortType, setSortType] = useState("default");
  const [sortedItems, setSortedItems] = useState([...cartItems]);

  // For Navigate

  const navigate = useNavigate();

  const totalPrice = cartItems
    .map((item) => item.price)
    .reduce((sum, price) => sum + price, 0)
    .toFixed(2);
  console.log(totalPrice);

  const handlePayment = () => {
    setPayment(0);
    clearCart();
    navigate("/");
  };

  const handleSortByPrice = (type) => {
    setSortType(type);
  };

  useEffect(() => {
    const sorted = [...cartItems].sort((a, b) => {
      if (sortType === "price") {
        return b.price - a.price;
      }
      return 0;
    });
    setSortedItems(sorted);
  }, [cartItems, sortType]);

  const handleDelete = (productId) => {
    removeFromCart(productId);
  };

  const handleDeleteFromWishList = (productId) => {
    removeFromWishList(productId);
  };

  return (
    <div>
      <div>
        <div className="hero w-[1300px] bg-purple-500 mt-12 rounded-xl h-[400px] ">
          <div>
            <div>
              <h1 className="text-3xl text-white font-bold text-center -mt-28">
                Dashboard
              </h1>
              <p className="py-6 text-center text-white font-semibold">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to <br /> the coolest
                accessories, we have it all!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Tabs>
          <TabList
            className={
              "relative -top-48 ml-[500px] font-bold text-lg flex items-center gap-8"
            }
          >
            <Tab className={"w-36 border-2 rounded-full text-center"}>
              <div>
                <div className="border-2 rounded-full p-1 ">Cart</div>
              </div>
            </Tab>
            <Tab className={"w-36 text-center border-2 rounded-full"}>
              <div className="border-2 rounded-full p-1 ">Wish List</div>
            </Tab>
          </TabList>

          {/* Add To Cart */}

          <TabPanel>
            <div className="mb-36">
              <div className="flex items-center justify-between mb-36 mt-12">
                <h1 className="text-3xl font-bold  ">Cart</h1>
                <div className="flex items-center gap-8">
                  <h1 className="text-3xl font-bold flex items-center">
                    Total Price : <FaDollarSign className="mt-1"></FaDollarSign>
                    {totalPrice}
                  </h1>
                  <button
                    onClick={() => handleSortByPrice("price")}
                    className="border-2 p-2 text-purple-500 font-black rounded-full text-lg border-purple-500 flex items-center gap-2"
                  >
                    Sort By Price
                    <FaSortAmountDown className="mt-1"></FaSortAmountDown>
                  </button>

                  <button
                    className="border-2 p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-black rounded-full text-lg text-white"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Purchase
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <img className="ml-[200px]" src={group} />
                      <h1 className="mt-4 text-center text-3xl font-bold">
                        Payment Successfully
                      </h1>
                      <div className="divider"></div>
                      <p className="text-center font-semibold text-lg">
                        Thanks For Purchasing.
                      </p>
                      <p className="text-xl font-bold ml-[130px] flex items-center mt-2">
                        Total Price :
                        <FaDollarSign className="mt-1"></FaDollarSign>
                        {totalPrice}
                      </p>
                      <div>
                        <form method="dialog">
                          <button
                            onClick={handlePayment}
                            className="border-2 p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-black rounded-full text-lg text-white w-full mt-6"
                          >
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
              {cartItems.length === 0 ? (
                <h1 className="mt-24 text-center font-black text-5xl">
                  Your Cart is Empty!
                </h1>
              ) : (
                <div className="mt-12 space-y-10 ">
                  {cartItems &&
                    sortedItems.map((item) => (
                      <div
                        key={item.product_id}
                        className="border-2 w-[1100px] rounded-xl flex items-start gap-6 p-10 justify-between"
                      >
                        <img
                          className="w-[150px] h-[150px] border-2 rounded-lg"
                          src={item.product_image}
                        />
                        <div className="space-y-4">
                          <h2 className="text-2xl font-black">
                            {item.product_title}
                          </h2>
                          <p className="text-lg font-bold text-slate-500">
                            {item.description}
                          </p>
                          <p className="text-xl font-bold text-slate-600">
                            Price: ${item.price}
                          </p>
                        </div>
                        <button onClick={() => handleDelete(item.product_id)}>
                          <MdDeleteForever className="text-3xl mt-12 ml-48"></MdDeleteForever>
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </TabPanel>

          {/* Wish List */}
          <TabPanel>
            <div className="mb-36">
              <div>
                <h1 className="text-3xl font-bold mt-12 ">WishList</h1>
              </div>
              {wishListItems.length === 0 ? (
                <h1 className="mt-24 text-center font-black text-5xl">
                  Your WishList is Empty!
                </h1>
              ) : (
                <div className="mt-12 space-y-10 ">
                  {wishListItems.map((item) => (
                    <div
                      key={item.product_id}
                      className="border-2 w-[1100px] rounded-xl flex items-start gap-6 p-10 justify-between"
                    >
                      <img
                        className="w-[150px] h-[150px] border-2 rounded-lg"
                        src={item.product_image}
                      />
                      <div className="space-y-4">
                        <h2 className="text-2xl font-black">
                          {item.product_title}
                        </h2>
                        <p className="text-lg font-bold text-slate-500">
                          {item.description}
                        </p>
                        <p className="text-xl font-bold text-slate-600">
                          Price: ${item.price}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          handleDeleteFromWishList(item.product_id)
                        }
                      >
                        <MdDeleteForever className="text-3xl mt-12 ml-48"></MdDeleteForever>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DashBoard;
