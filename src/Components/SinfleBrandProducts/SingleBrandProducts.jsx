import { AiFillStar,AiOutlineStar } from 'react-icons/ai';
import { BiDetail } from 'react-icons/bi';
import { RxUpdate } from 'react-icons/rx';
import PropTypes from 'prop-types';
import Rating from 'react-rating';

const SingleBrandProducts =( {product} )=> {
    // console.log(product)
    const{photo,name,rating,type,price,brand}=product;
    return (
        <div>
               <div className="card w-96 bg-base-100 shadow-2xl">
  <figure><img className='p-5' src={photo}  /></figure>
  <div className="card-body">
    <h2 className="text-center font-semibold text-xl  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500">{name}</h2>
    <h2 className="card-title">Brand:{brand}</h2>
    <h2 className="card-title">Type:{type}</h2>
    <p className='text-gray-600'> price: ${price}</p>
    <Rating
      emptySymbol={<AiOutlineStar></AiOutlineStar>}
      fullSymbol={<AiFillStar></AiFillStar>}
     initialRating={rating}
     readonly

    />
    <div className="flex justify-between">
      <button className="btn bg-gradient-to-r from-green-500 to-cyan-500"><BiDetail></BiDetail></button>
      <button className="btn bg-gradient-to-r from-green-500 to-cyan-500"><RxUpdate></RxUpdate></button>
    </div>
  </div>
</div>
        </div>
    );
};

SingleBrandProducts.propTypes = {
    product:PropTypes.object,
};

export default SingleBrandProducts;