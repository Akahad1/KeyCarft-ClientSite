import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/Dashboard";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Cart from "../pages/Cart";
import ProductsPage from "../pages/ProductsPage";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/productsPage", element: <ProductsPage></ProductsPage> },
      { path: "/cart", element: <Cart></Cart> },

      { path: "/dashboard", element: <Dashboard></Dashboard> },
      { path: "/aboutUs", element: <AboutUs></AboutUs> },
      { path: "/contactUs", element: <ContactUs></ContactUs> },

      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/l2/a4/product/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/l2/a4/cart/${params.id}`),
      },
    ],
  },
]);
