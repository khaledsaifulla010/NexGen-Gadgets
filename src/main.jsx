import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import Home from "./components/AllPages/Home/Home.jsx";
import Dashboard from "./components/AllPages/Dashboard/DashBoard.jsx";
import Statistics from "./components/AllPages/Statistics/Statistics.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import ProductDetails from "./components/AllPages/ProductDetails/ProductDetails.jsx";
import { CartProvider } from "./components/Hooks/CartContext.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "product/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader:()=>fetch('/products.json')
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
