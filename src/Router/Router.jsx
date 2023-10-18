import { createBrowserRouter } from "react-router-dom";
import Route from "../Components/Route/Route";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import MyCart from "../Components/MyCart/MyCart";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Route></Route>,
        children:[
        {
          path:"/",
          element:<Home></Home>

        },
        {
            path:"/addProduct",
            element:<AddProduct></AddProduct>
        },
        {
            path:"/myCart",
            element:<MyCart></MyCart>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
      ]
    }
])
export default Router;