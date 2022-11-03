import React from 'react'
import './footer.css'
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";


const Footer = () => {
  return (
   <>
   <div style={{height:"10rem",width:"100%",display:"flex",flexDirection:"column",gap:"2rem",justifyContent:"center",textAlign:"center",alignItems:"center"}} className="bg-[#4db5ff]">
  
                <div className="grid grid-cols-4 mx-auto w-4/5 gap-10">
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer w-[80%]"n>
                    <FaLinkedin size={35} />
                  </div>
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer w-[80%]">
                    <FaInstagram size={35} />
                  </div>
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer w-[80%]">
                    <FaFacebook size={35} />
                  </div>
                  <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer w-[80%]">
                    <FaTwitter size={35} />
                    
                  </div>
                </div>
                
                <p className="bg-[#4db5ff]">@copyright All right reserved </p>
             
   </div>
   </>
  )
}

export default Footer
