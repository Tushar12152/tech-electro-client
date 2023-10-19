
import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import swal from 'sweetalert';


const MyCartsDetails = ({cart,myCarts,setMyCarts}) => {
    const{_id,photo,name,type,price,brand}=cart;


    const handleDelete=id=>{

         console.log(id)

         swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",});

                 fetch(`https://tech-electro-server-1cuea8g4t-tushars-projects-8df8c1f7.vercel.app/carts/${id}`,{
                    method:"DELETE",
                   })
                   .then(res=>res.json())
                   .then(data=>{
                      if(data.deletedCount>0){

                          swal("Poof! Your imaginary product has been deleted!", {
                              icon: "success",}); 
                              const remaining = myCarts.filter(cart => cart._id !== id);
                              setMyCarts(remaining);
                            
                            }
                   })



            } else {
              swal("Your imaginary product is safe!");
            }
          });


    }







    return (
        <div>
              <div className="card w-96 bg-base-100 shadow-2xl">
  <figure><img className='p-5' src={photo}  /></figure>
  <div className="card-body">
    <h2 className="text-center font-semibold text-xl  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500">{name}</h2>
    <h2 className="card-title">Brand:{brand}</h2>
    <h2 className="card-title">Type:{type}</h2>
    <p className='text-gray-600'> price: ${price}</p>
    
    

    <button onClick={()=>handleDelete(_id)} className='btn text-2xl w-12 ml-36 bg-gradient-to-r from-green-500 to-cyan-500'> <AiFillDelete></AiFillDelete> </button>
  
  </div>

              </div>
        </div>
    );
};

MyCartsDetails.propTypes = {
    cart:PropTypes.object.isRequired,
    myCarts:PropTypes.array,
    setMyCarts:PropTypes.array,
};

export default MyCartsDetails;