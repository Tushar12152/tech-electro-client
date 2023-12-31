import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Update = () => {
const updateProduct=useLoaderData()
const{_id,photo,name,rating,type,price,brand,description}=updateProduct
// console.log(updateProduct)


const handleUpdate=e=>{
    e.preventDefault()
    const form=e.target;
    const name=form.name.value;
    const brand=form.brand.value;
    const type=form.type.value;
    const price=form.price.value;
    const description=form.description.value;
    const rating=form.rating.value;
    const photo=form.photo.value;

    const product={
        name,brand,type,price,description,rating,photo
    }

    console.log(product)

    fetch(`https://tech-electro-server-1cuea8g4t-tushars-projects-8df8c1f7.vercel.app/products/${_id}`,{
        method:"PUT",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.matchedCount>0){
            swal('success',"Your product is Updated",'success')
        }
    })
}


    return (
        <div className="p-24 bg-gray-200 ">
        <h2 className="text-4xl font-bold text-center pb-16 ">Update a Product</h2>
        <form onSubmit={handleUpdate}>
           
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={name} required type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control md:w-1/2 ml-4">
                    <label  className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={brand} id="brand" required type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>




                

            </div>



            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={type} required type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={price} required type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>



          
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={description} required type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={rating} required type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
          



             <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={photo} required type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            


            <input required type="submit" value="Update Product" className="btn btn-block  bg-gradient-to-r from-green-500 to-cyan-500 " />

        </form>
    </div>
    );
};

export default Update;