import { useLoaderData, useParams } from "react-router-dom";
import SingleBrandProducts from "../SinfleBrandProducts/SingleBrandProducts";

const BrandsProducts = () => {
      const singleBrand=useParams()
      const allBrands=useLoaderData()
      const {brand}=singleBrand;

      const selectedBrands=allBrands.filter(item=>item.brand.toLowerCase()===brand.toLowerCase())
      // console.log(selectedBrands)




    return (
        <div>
            
            <div className="carousel w-[40%] h-80 lg:ml-[400px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src={'https://i.ibb.co/fSnV4B2/ebb57136f275a33ed94887b0d608d38e.jpg'}className="w-full "  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={'https://i.ibb.co/DbY8X8s/download.jpg'} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={'https://i.ibb.co/YXqLPyX/download.jpg'} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={'https://i.ibb.co/6wKgQ25/download.jpg'} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
            </div>



              {
                selectedBrands.length>0?
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-10  gap-6 w-[80%] mx-auto ">
                    {
                        selectedBrands.map(product=><SingleBrandProducts key={product._id} product={product}></SingleBrandProducts>)
                    }
                     
                </div>
                :
                <div>
                     <div>
                         <h1  className="text-center font-bold mt-24  text-3xl  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500 ">Sorry product is not available</h1>
                     </div>
                </div>
              }
        </div>
    );
};

export default BrandsProducts;