// import AOS from 'aos';
// import 'aos/dist/aos.css'; 

import { PropTypes } from 'prop-types';

const Brands = ({singleBrand}) => {

         const{photo,brand}=singleBrand;
    return (
        <div >
              <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="shadow-2xl w-[200px] rounded-lg">
                 <img className="w-[300px] h-[150px] p-5" src={photo} alt="" />
                   <h1 className='text-xl mt-5 font-semibold text-center p-3 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500'>{brand}</h1>
              </div>

        </div>
    );
};


Brands.propTypes={
  singleBrand:PropTypes.object,
}
export default Brands;