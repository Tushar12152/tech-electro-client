import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [showPassword,setShowPassword]=useState(true)
    const {createUser}=useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
   if(/^[a-z]{1,5}$/.test(password)){
    toast("Wow so easy!");
   }

        console.log(email,password)
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

   
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold ">Register now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
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
          <button className="btn bg-gradient-to-r from-cyan-500 to-green-500 ">Register</button>
        </div>
        <p>Already have an Account? please <Link className="text-cyan-500" to='/login'>Log In</Link></p>
      </form>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default Register;