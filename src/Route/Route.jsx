import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Product_submit from "../Components/Product_submit";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Layout></Layout>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/add_equipment',
                        element: <Product_submit></Product_submit>
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/signup',
                        element: <Signup></Signup>
                  }
            ]
      }
])

export default router;