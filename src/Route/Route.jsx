import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Product_submit from "../Components/Product_submit";
import Details from "../Components/Details";
import All_Equipment from "../Components/All_Equipment";
import My_equipment from "../Components/My_equipment";
import Update_submit from "../Components/Update_submit";
import Error from "../Components/Error";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Layout></Layout>,
            errorElement: <Error></Error>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>,
                        loader: () => fetch ('http://localhost:5000/sports')
                  },
                  {
                        path: '/all_sports_equipment',
                        element: <All_Equipment></All_Equipment>
                  },
                  {
                        path: '/my_equipment_list',
                        element: <My_equipment></My_equipment>
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
                  },
                  {
                        path: '/details/:id',
                        element: <Details></Details>,
                        loader: () => fetch ('http://localhost:5000/sports')
                  },
                  {
                        path: '/update_sports/:id',
                        element: <Update_submit></Update_submit>,
                        loader: ({params}) => fetch (`http://localhost:5000/sports/${params.id}`)
                  }
                  
            ]
      }
])

export default router;