import { Helmet } from "react-helmet";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { useCart } from "../../Hooks/CartContext";

const Statistics = () => {
  const colors = [
    "purple",
    "pink",
    "crimson",
    "lime",
    "Indigo",
    "Coral",
    "Teal",
    "gold",
    "violet",
    "Maroon",
    "Olive",
    "Turquoise",
  ];

  const { cartItems } = useCart();

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      <Helmet>
        <title>NextGen Gadgets || Statistics</title>
      </Helmet>
      <div className="hero w-[1300px] bg-purple-500 mt-12 mb-24 rounded-xl h-[200px] ">
        <div>
          <div>
            <h1 className="text-3xl text-white font-bold text-center ">
              Statistics
            </h1>
            <p className="py-6 text-center text-white font-semibold">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
          </div>
        </div>
      </div>
      {/*  Bar Chart */}
      <div className="mb-36">
        {cartItems.length > 0 ? (
          <div className="mb-36 ">
            <BarChart
              width={1400}
              height={500}
              data={cartItems}
              margin={{
                top: 20,
                right: 70,
                left: -60,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product_title" />
              <YAxis />
              <Bar
                dataKey="price"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {cartItems.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </div>
        ) : (
          <div className="text-center mt-12 mb-36">
            <h2 className="text-4xl font-bold">
              No Statistics Right Now. Please Add At Least One Item To The Cart{" "}
              <br />
              For Showing This Statistics!.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
