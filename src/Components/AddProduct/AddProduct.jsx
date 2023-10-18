import swal from "sweetalert";

const AddProduct = () => {

    const handleAdd=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const brand=form.brand.value;
        const type=form.brand.value;
        const price=form.price.value;
        const description=form.description.value;
        const rating=form.rating.value;
        const photo=form.photo.value;

        const product={
            name,brand,type,price,description,rating,photo
        }

        console.log(product)

        fetch('http://localhost:5001/products',{
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                swal('success',"Your product is added",'success')
            }
        })
    }


    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-4xl font-bold text-center pb-16 ">Add a Product</h2>
        <form onSubmit={handleAdd}>
           
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>



            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>



          
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
          



             <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            


            <input type="submit" value="Add Product" className="btn btn-block" />

        </form>
    </div>
    );
};

export default AddProduct;