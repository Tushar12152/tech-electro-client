import { useLoaderData } from "react-router-dom";
import MyCartsDetails from "./myCartsDetails/myCartsDetails";
import { useState } from "react";

const MyCart = () => {
    const Carts=useLoaderData()

    const [myCarts,setMyCarts]=useState(Carts)
    console.log(Carts)
    return (
       <div>
          {
        myCarts.length>0?
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 w-[70%] mx-auto mt-10">
             {
                myCarts.map(cart=><MyCartsDetails key={cart._id} 
                    cart={cart}
                    setMyCarts={setMyCarts}
                    myCarts={myCarts}
                ></MyCartsDetails>)
             }
        </div>:
       
           <div>
            

              <h1  className="text-center font-bold mt-24  text-3xl  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500 ">You Donot Add Any product in Your Cart</h1>
           </div>
        
    
    }
       </div>
    );
};

export default MyCart;