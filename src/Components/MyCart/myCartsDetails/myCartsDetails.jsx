
import PropTypes from 'prop-types';

const MyCartsDetails = ({cart}) => {
    const{photo,name,type,price,brand}=cart;


    return (
        <div>
              <div className="card w-96 bg-base-100 shadow-2xl">
  <figure><img className='p-5' src={photo}  /></figure>
  <div className="card-body">
    <h2 className="text-center font-semibold text-xl  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500">{name}</h2>
    <h2 className="card-title">Brand:{brand}</h2>
    <h2 className="card-title">Type:{type}</h2>
    <p className='text-gray-600'> price: ${price}</p>
    
    
  </div>
              </div>
        </div>
    );
};

MyCartsDetails.propTypes = {
    cart:PropTypes.object.isRequired,
};

export default MyCartsDetails;