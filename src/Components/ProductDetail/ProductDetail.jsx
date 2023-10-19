import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const ProductDetail = () => {
    const id=useParams()
    // console.log(id)

    const allData=useLoaderData()

    // console.log(allData)

    const specificItem=allData.find(data=>data._id===id.id)
    // console.log(specificItem)

    const { name, brand, type, price,rating, description, photo}=specificItem
    // console.log( specificItem)

    const insertData={name, brand, type, price, description, rating, photo}

const handleAddCarts=()=>{
    fetch('http://localhost:5001/carts',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(insertData)
    })
    .then(res=>res.json())

    .then(data=>{
        console.log(data)
        if(data.insertedId){
            
            swal('success',"Your product is added",'success')

        }
        else if(data.success===false){
            swal('Error',"Your product is already exist ",'error')
        }
    })
}



    return (
        <div>
            <div className="hero w-[90%] mx-auto min-h-screen" style={{backgroundImage: `url(${photo})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
             <div className="hero-content text-center text-neutral-content">
                 <div className="max-w-md">
                 <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500 text-center py-10">{name}</h1>
                      <p className="mb-5">{description}</p>
                      <p className="mb-2 text-xl">Price: ${price}</p>
                      <p className="mb-2 text-xl">Brand: {brand}</p>
                      <p className="mb-2 text-xl">{type}</p>
                   <button onClick={handleAddCarts} className="btn bg-gradient-to-r from-green-500 to-cyan-500 ">ADD TO CART</button>
              </div>
        </div>
    </div>
        </div>
    );
};

export default ProductDetail;