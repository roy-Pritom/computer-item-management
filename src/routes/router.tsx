import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/Login";
import AllItem from "../pages/ComputerMangemnet/AlItem";
import AddItem from "../pages/ComputerMangemnet/AddItem";
import App from "../App";
import EditItem from "../pages/ComputerMangemnet/EditItem";
import SaleIItem from "../pages/Sale/SaleIItem";
import SaleHistory from "../pages/Sale/SaleHistory";
import UserDashboard from "../pages/UserDashboard";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
    },
    {
      path: "/dashboard",
      element:<App/>,
      children:[
        {
          path:"user-dashboard",
          element:<UserDashboard/>
        },
        {
          path:"all-item",
          element:<AllItem/>
        },
        {
          path:"add-item",
          element:<AddItem/>
        },
        {
          path:"edit-item",
          element:<EditItem/>
        },
        {
          path:"sale-item",
          element:<SaleIItem/>
        },
        {
          path:"sale-history",
          element:<SaleHistory/>
        },
      ]
    },
    {
        path:"/login",
        element:<Login/>
    }
  ])

  export default router;