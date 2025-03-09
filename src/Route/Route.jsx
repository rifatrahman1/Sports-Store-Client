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
import Private_route from "../Private/Private_route";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Layout></Layout>,
            errorElement: <Error></Error>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>,
                        loader: () => fetch('https://sports-store-server-phi.vercel.app/sports')
                  },
                  {
                        path: '/all_sports_equipment',
                        element: <All_Equipment></All_Equipment>,
                        loader: () => fetch('https://sports-store-server-phi.vercel.app/all_sports')
                  },
                  {
                        path: '/my_equipment_list',
                        element: 
                              <Private_route>
                                    <My_equipment />
                              </Private_route>,
                        loader: () => fetch('https://sports-store-server-phi.vercel.app/all_sports?sort=asc')
                  },
                  {
                        path: '/add_equipment',
                        element: <Private_route>
                              <Product_submit></Product_submit>
                        </Private_route>
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
                        element: <Private_route>
                              <Details></Details>
                        </Private_route>,
                        loader: () => fetch('https://sports-store-server-phi.vercel.app/sports')
                  },
                  {
                        path: '/update_sports/:id',
                        element: <Private_route>
                              <Update_submit></Update_submit>
                        </Private_route>,
                        loader: ({ params }) => fetch(`https://sports-store-server-phi.vercel.app/sports/${params.id}`)
                  }

            ]
      }
])

export default router;