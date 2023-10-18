import About from "./About/About";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import Footer from "./Footer/Footer";
import Service from "./service/Service";

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500 text-center py-16">OUR BRANDS</h1>
             <Brands></Brands>
             <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500 text-center py-16">OUR Service</h1>
             <Service></Service>

             <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500 text-center py-16">About Us</h1>
             <About></About>
             
             <Footer></Footer>
        </div>
    );
};

export default Home;