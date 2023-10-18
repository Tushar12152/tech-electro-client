// import AOS from 'aos';
// import 'aos/dist/aos.css'; 

const Brands = () => {
    return (
        <div  className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  gap-6 w-[70%] mx-auto">
              <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="shadow-2xl w-[200px] rounded-lg">
                 <img className="w-[300px] h-[150px] p-5" src={"https://i.ibb.co/rQcgDxN/Apple-Logo.png"} alt="" />
                   <h1 className='text-xl mt-5 font-semibold text-center p-3 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500'>Apple</h1>
              </div>


              <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="shadow-2xl w-[200px]  rounded-lg">
                 <img className="w-[300px] h-[150px] p-5  " src={"https://i.ibb.co/59zvQFY/Samsung-Logo-svg.png"} alt="" />
                   <h1 className='text-xl mt-5 font-semibold text-center p-3 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500'>Samsung</h1>
              </div>


              <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="shadow-2xl w-[200px] rounded-lg">
                 <img className="w-[300px] h-[150px] p-5 " src={"https://i.ibb.co/f041dXj/Sony-logo-svg.png"} alt="" />
                   <h1 className='text-xl mt-5 font-semibold text-center p-3 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500'>Sony</h1>
              </div>

              <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="shadow-2xl w-[200px] rounded-lg">
                 <img className="w-[300px]  h-[150px] p-5 " src={"https://i.ibb.co/wzM96ns/Intel-logo-2022.png"} alt="" />
                   <h1 className='text-xl mt-5 font-semibold text-center p-3 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500'>Intel</h1>
              </div>

              <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="shadow-2xl w-[200px] rounded-lg">
                 <img className="w-[300px]  h-[150px] p-5 " src={"https://i.ibb.co/27dtw2P/download.png"} alt="" />
                   <h1 className='text-xl mt-5 font-semibold text-center p-3 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500'>Google</h1>
              </div>

              <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="shadow-2xl w-[200px] rounded-lg">
                 <img className="w-[300px]  h-[150px] p-5 " src={"https://i.ibb.co/Kws0FJm/walton-group-logo-brandlogos-net-hnngy-512x512.png"} alt="" />
                   <h1 className='text-xl mt-5 font-semibold text-center p-3 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500'>Walton</h1>
              </div>
        </div>
    );
};

export default Brands;