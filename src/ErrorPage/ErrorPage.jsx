import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
             <h1 className=" mt-24 font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500 text-center">Oppppppps 404....... <br /> Page Not Found</h1>

             <Link to='/'>
             
             <button to className="btn  lg:ml-[620px] mt-5 bg-gradient-to-r from-green-500 to-cyan-500">Home</button>
             </Link>
        </div>
    );
};

export default ErrorPage;