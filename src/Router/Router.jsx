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
import Update from "../Components/update/update";
import ErrorPage from "../ErrorPage/ErrorPage";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Route></Route>,
        errorElement:<ErrorPage></ErrorPage>,
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
            loader:()=>fetch('https://tech-electro-server-1cuea8g4t-tushars-projects-8df8c1f7.vercel.app/carts')
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
            loader:()=>fetch('https://tech-electro-server-1cuea8g4t-tushars-projects-8df8c1f7.vercel.app/products')
        },
        {
            path:"/product/:id",
            element:<PrivateRoute>
                     <ProductDetail></ProductDetail>
                   </PrivateRoute>,
            loader:()=>fetch(`https://tech-electro-server-1cuea8g4t-tushars-projects-8df8c1f7.vercel.app/products`)
        },
        {
            path:'/update/:id',
            element:<PrivateRoute>
                        <Update></Update>
                    </PrivateRoute>,
            loader:({params})=>fetch(`https://tech-electro-server-1cuea8g4t-tushars-projects-8df8c1f7.vercel.app/products/${params.id}`)
        }
      ]
    }
])
export default Router;