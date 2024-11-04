import { useCart } from "../../Hooks/CartContext";

const DashBoard = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mt-8">Cart</h1>
      </div>
      <div>
        {cartItems.length === 0 ? (
          <h1 className="mt-56 text-center font-black text-5xl">
            Your cart is empty!
          </h1>
        ) : (
          <div className="mt-12 space-y-10 ">
            {cartItems.map((item) => (
              <div
                key={item.product_id}
                className="border-2 w-[1100px] rounded-xl flex items-start gap-6 p-10"
              >
                <img
                  className="w-[150px] h-[150px] border-2 rounded-lg"
                  src={item.product_image}
                />
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">{item.product_title}</h2>
                  <p className="text-lg font-bold text-slate-500">
                    {item.description}
                  </p>
                  <p className="text-xl font-bold text-slate-600">
                    Price: ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
