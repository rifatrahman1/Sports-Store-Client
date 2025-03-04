import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home";
import Add_equipment from "../Components/Add_equipment";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

const router = createBrowserRouter ([
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
                        element: <Add_equipment></Add_equipment>
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