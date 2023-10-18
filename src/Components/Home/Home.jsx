import { Link, useLoaderData } from "react-router-dom";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import Footer from "./Footer/Footer";
import Service from "./service/Service";

const Home = () => {
    const brands=useLoaderData()
    // console.log(brands)

    return (
        <div>
             <Banner></Banner>
             <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500 text-center py-16">OUR BRANDS</h1>
            
             <div  className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  gap-6 w-[70%] mx-auto">
             {
                brands.map(brand=><Link to={`products/${brand.brand}`} key={brand.id}>
                                      <Brands singleBrand={brand}></Brands>
                                  </Link>)
             }
             </div>
             <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500 text-center py-16">OUR Service</h1>
             <Service></Service>

             <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500 text-center py-16">About Us</h1>
             <About></About>
             
             <Footer></Footer>
        </div>
    );
};

export default Home;