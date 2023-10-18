import { FaFacebook,FaInstagramSquare,FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" flex justify-around items-center p-4 text-neutral-content  bg-gradient-to-r from-green-500 to-cyan-500 ">
  <aside className="items-center ">
   <img className="w-[120px] rounded-full" src={" https://i.ibb.co/44f2rKh/360-F-102975288-L4aqjlx-Xo-Zrkg0-CVv-BXmn-S78ob-UY9-NFL.jpg"} alt="" />
   
  </aside> 
  <p>Copyright © 2023 - All right reserved</p>
  <div className="flex text-2xl gap-4 md:place-self-center md:justify-self-end">
  <a href="#"> <FaFacebook></FaFacebook></a>
  <a href="#">   <FaInstagramSquare></FaInstagramSquare></a>
  <a href="#"> <FaTwitter></FaTwitter></a>
 
   
  </div>
</footer>
    );
};

export default Footer;