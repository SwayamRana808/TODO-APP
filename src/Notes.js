import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import {removeNote} from '../utils/slice';

const Notes = () => {
    const data=useSelector((state)=>{
        return state.users;
    })
    const dispatch=useDispatch()
   const handleColor=(index)=>{
    if(document.querySelector(`#notes${index}`).classList.contains("bg-blue-400/50")){
          document.querySelector(`#notes${index}`).classList.remove("bg-blue-400/50");
          document.querySelector(`#notes${index}`).classList.add("bg-green-400/50");
         }else{
          document.querySelector(`#notes${index}`).classList.add("bg-blue-400/50");
          document.querySelector(`#notes${index}`).classList.remove("bg-green-400/50");
    }}
  
   
    
const handleDelete=(index)=>{
  dispatch(removeNote(index));
}
  return ( 
    <div className='flex flex-col max-w-[800px]  min-w-[200px] mx-[20px] sm:mx-auto mt-[50px] gap-[30px]'>
     <div className="alert-box failure fixed bottom-[10vh] z-[300] left-[50%] translate-x-[-50%]">Task Incomplete!</div>
     <div className="alert-box success fixed bottom-[10vh] z-[300] left-[50%] translate-x-[-50%]">Task Completed!</div>
      {data.map((note,index)=>{
      
           return (
            <p key={index}  id={`notes${index}`} className='   h-auto bg-blue-400/50  py-[20px] pl-[10px] pr-[40px] relative text-[15px] sm:text-[20px] rounded-lg font-["Nanum_Pen_Script"]  break-words  '>{note}
               <span className='absolute bottom-2 right-[20px]'>
                 <i onClick={()=>{
                  console.log(document.getElementById(`teal-checkbox${index}`).checked)
                     if(document.getElementById(`teal-checkbox${index}`).checked)
                       {
                        
                        handleDelete(index);
                        
                       }else{
                        $( "div.failure" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                       }
                       }} className="fa-solid fa-trash  "></i>
               </span>
               <span className='absolute top-2 right-[20px]'>
                 <input   id={`teal-checkbox${index}`} type="checkbox"  onClick={(e)=>{
                    if(e.target.checked)
                    $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                    handleColor(index)
                   }} className="h-4 w-4  accent-green-600">
                 </input>
                </span>
            </p>
           )
      })}
      
    </div>
  )
}

export default Notes;