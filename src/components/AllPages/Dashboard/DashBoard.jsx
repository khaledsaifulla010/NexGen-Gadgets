import { useCart } from "../../Hooks/CartContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdDeleteForever } from "react-icons/md";

const DashBoard = () => {
  const { cartItems } = useCart();

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
              <div className="border-2 rounded-full p-1 ">Cart</div>
            </Tab>
            <Tab className={"w-36 text-center border-2 rounded-full"}>
              <div className="border-2 rounded-full p-1 ">Wish List</div>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="mb-36">
              <h1 className="text-3xl font-bold mt-8 mb-">Cart</h1>
              {cartItems.length === 0 ? (
                <h1 className="mt-24 text-center font-black text-5xl">
                  Your cart is empty!
                </h1>
              ) : (
                <div className="mt-12 space-y-10 ">
                  {cartItems.map((item) => (
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
                      <button>
                        <MdDeleteForever className="text-3xl mt-12 ml-48"></MdDeleteForever>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DashBoard;
