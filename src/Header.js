import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom";
const Header = () => {
    const data=useSelector((state)=>{
        return state.user;
    })
    console.log(data)

    useEffect(()=>{
        var width = window.innerWidth;
        if(width<480){
            document.querySelector(".fa-pen-to-square").classList.remove("fa-3x");
            document.querySelector(".fa-pen-to-square").classList.add("fa-2x");
        } 
         // Getting the width of the browser whenever the screen resolution changes.
            window.addEventListener('resize',()=>{
                 width = window.innerWidth;
                if(width<480){
                    document.querySelector(".fa-pen-to-square").classList.remove("fa-3x");
                    document.querySelector(".fa-pen-to-square").classList.add("fa-2x");
                }else{
                    document.querySelector(".fa-pen-to-square").classList.add("fa-3x");
                }
                if(width<480){
                    document.querySelector(".fa-house").classList.remove("fa-3x");
                    document.querySelector(".fa-house").classList.add("fa-2x");
                }else{
                    document.querySelector(".fa-house").classList.add("fa-3x");
                }
            })
            window.addEventListener('load',()=>{
                width = window.innerWidth;
               if(width<480){
                   document.querySelector(".fa-pen-to-square").classList.remove("fa-3x");
                   document.querySelector(".fa-pen-to-square").classList.add("fa-2x");
               }else{
                   document.querySelector(".fa-pen-to-square").classList.add("fa-3x");
               }
               if(width<480){
                   document.querySelector(".fa-house").classList.remove("fa-3x");
                   document.querySelector(".fa-house").classList.add("fa-2x");
               }else{
                   document.querySelector(".fa-house").classList.add("fa-3x");
               }
           })
            
            
          }
          // Getting the width of the browser on load
          
    ,[])
  return (
    
    <div className='h-[100px] backdrop-blur bg-white/10 relative' >
    <div className=' flex   h-[100px] w-[100%] items-center absolute'>
    <p className=' font-["Rubik_Doodle_Shadow"] text-[30px]  sm:text-[50px] md:text-[65px] lg:text-[80px]   w-[100%] text-center  '>Todo List </p>
    </div>
        <div className='absolute right-[6vw] sm:right-[10vw] h-[100%] flex'> 
         <Link to="/Notes" className='self-center '><i className="fa-solid z-60 fa-pen-to-square fa-3x  text-white  cursor-pointer relative"><p className='text-[15px] absolute bottom-0 right-0 text-white bg-red-600  px-[5px] py-[2px] text-center rounded-full ' style={{display:data.length==0?"none":""}}>{data.length}</p></i></Link>
        </div>
        <div className=' absolute left-[6vw] sm:left-[10vw] h-[100%] flex'>
        <Link to="/" className='self-center '><i className="fa-solid fa-house fa-3x "></i></Link></div>
       </div>
      
  )
}

export default Header;