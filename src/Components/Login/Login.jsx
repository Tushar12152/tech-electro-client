import { useContext, useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import swal from "sweetalert";

const Login = () => {

    const [showPassword,setShowPassword]=useState(true)
    const {signUp,googleSignUp}=useContext(AuthContext)
    const Navigate=useNavigate()
   
const handleGoogleSignUp=()=>{
  googleSignUp()
  .then(()=>{
    swal("WOW!", "You are Successfully login! ", "success");
    Navigate(location?.state? location.state:'/')
  })
  .catch(error=>{
    swal("Error!", `${error.message}`, "error");
  })
}


    const handleLogIn=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
       
       
          console.log(email,password)
          signUp(email,password)
          .then(()=>{
            swal("WOW!", "You are Successfully login! ", "success");
            Navigate(location?.state? location.state:'/')
          })
          .catch(error=>{
            swal("Error!", `${error.message}`, "error");
          })
   

    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold ">Login now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         <div className="relative">
         <input type={showPassword?"text":"password"} placeholder="password" name="password" className="input input-bordered w-full" required />

         <span className="absolute top-4 right-1" onClick={()=>setShowPassword(!showPassword)}>
             {showPassword?<AiFillEye></AiFillEye>:<AiFillEyeInvisible></AiFillEyeInvisible>}
         </span>

         </div>
          <label className="label">
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r from-cyan-500 to-green-500 ">Login</button>
        </div>
        <p>New Here? please <Link className="text-cyan-500" to='/register'>register</Link></p>
           <p className="text-xl font-semibold text-center border-b-2 p-5 ">SIGN UP WITH</p>
          <span onClick={handleGoogleSignUp} className="text-2xl ml-24 mt-2 "> <FcGoogle></FcGoogle></span>
      </form>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;