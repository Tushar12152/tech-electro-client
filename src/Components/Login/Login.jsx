import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Login = () => {

    const [showPassword,setShowPassword]=useState(true)
   
    const handleLogIn=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
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
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;