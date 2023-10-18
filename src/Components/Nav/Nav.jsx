import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const Nav = () => {

  const {user,logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then(()=>{
     swal('logout success')

     .catch(err=>{
      console.log(err.message)
     })
    })
   
  };


     const nav=(<div className="flex gap-6">
           <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>Home</NavLink>

           <NavLink to="/addProduct" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>Add Product</NavLink>

           <NavLink to="/myCart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>My Cart</NavLink>

           <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>Login</NavLink>

           
       </div>)



    return (
        <div>
                <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {nav}
      </ul>
    </div>

    <div>
         <img className="w-[120px] rounded-full" src={"https://i.ibb.co/44f2rKh/360-F-102975288-L4aqjlx-Xo-Zrkg0-CVv-BXmn-S78ob-UY9-NFL.jpg"}  />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {nav}
    </ul>
  </div>
  <div className="navbar-end">
  {
      user?<div className="flex gap-1">
            {user?.photoURL&&  <img className="w-12 rounded-full"  src={user?.photoURL}  alt="" /> }
      
       <div  className="flex gap-2 items-center">
       <p className="bg-gradient-to-r from-cyan-500 to-green-500  ">{user?.displayName||user?.email}</p>
    
        <button onClick={handleLogOut} className="btn bg-gradient-to-r from-cyan-500 to-green-500 ">LogOut</button>
       </div>

      </div>
      :
      <Link to='/login' className="btn bg-gradient-to-r from-green-500 to-cyan-500 ">LogIn</Link>
    }
  </div>
</div>
        </div>
    );
};

export default Nav;