import { createBrowserRouter } from "react-router-dom";
import Route from "../Components/Route/Route";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import MyCart from "../Components/MyCart/MyCart";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import BrandsProducts from "../Components/BrabdsProducts/BrandsProducts";
import ProductDetail from "../Components/ProductDetail/ProductDetail";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Route></Route>,
        children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch('/Brand.json')

        },
        {
            path:"/addProduct",
            element:<PrivateRoute>
                         <AddProduct></AddProduct>
                   </PrivateRoute>
        },
        {
            path:"/myCart",
            element:<PrivateRoute>
                      <MyCart></MyCart>
                   </PrivateRoute>,
            loader:()=>fetch('http://localhost:5001/carts')
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/products/:brand",
            element:<BrandsProducts></BrandsProducts>,
            loader:()=>fetch('http://localhost:5001/products')
        },
        {
            path:"/product/:id",
            element:<PrivateRoute>
                     <ProductDetail></ProductDetail>
                   </PrivateRoute>,
            loader:()=>fetch(`http://localhost:5001/products`)
        }
      ]
    }
])
export default Router;