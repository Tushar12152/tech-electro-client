import { useLoaderData } from "react-router-dom";
import MyCartsDetails from "./myCartsDetails/myCartsDetails";

const MyCart = () => {
    const myCarts=useLoaderData()
    console.log(myCarts)
    return (
        <div>
             {
                myCarts.map(cart=><MyCartsDetails key={cart._id} 
                    cart={cart}
                ></MyCartsDetails>)
             }
        </div>
    );
};

export default MyCart;