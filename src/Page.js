import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNote } from '../utils/slice';
import { changeColor,deleteColor } from '../utils/colorSlice';
const Page = (props) => {
  // console.log(props, "Props in Page component");
  const data=useSelector((state)=>state.colors)
  const dispatch = useDispatch();
  // console.log(data,"undefined")
  const handleDelete = (index) => {
    dispatch(removeNote(index));
    dispatch(deleteColor(index));
  };
useEffect(()=>{
  if(data){
  if (data[props.index]) {
    document.getElementById(`teal-checkbox${props.index}`).checked=true;
    document.getElementById(`notes${props.index}`).classList.remove("bg-blue-400/50");
    document.getElementById(`notes${props.index}`).classList.add("bg-green-400/50");
    } else {
      document.getElementById(`teal-checkbox${props.index}`).checked=false;
        document.getElementById(`notes${props.index}`).classList.add("bg-blue-400/50");
        document.getElementById(`notes${props.index}`).classList.remove("bg-green-400/50");
    }
}},[data])

  return (
    <p id={`notes${props.index}`} className='h-auto bg-blue-400/50 py-[20px] pl-[10px] pr-[40px] relative text-[15px] sm:text-[20px] rounded-lg font-["Nanum_Pen_Script"] break-words'>
      {props.note}
      <span className='absolute bottom-2 right-[20px]'>
        <i
          onClick={() => {
            if (document.getElementById(`teal-checkbox${props.index}`).checked) {
              handleDelete(props.index);
            } else {
              $("div.failure").fadeIn(300).delay(1500).fadeOut(400);
            }
          }}
          className="fa-solid fa-trash"
        ></i>
      </span>
      <span className='absolute top-2 right-[20px]'>
        <input
          id={`teal-checkbox${props.index}`}
          type="checkbox"
          onClick={(e)=>{
            
            dispatch(changeColor(props.index))   
            if (e.target.checked) {
                $("div.success").fadeIn(300).delay(1500).fadeOut(400);
                document.getElementById(`notes${props.index}`).classList.remove("bg-blue-400/50");
                document.getElementById(`notes${props.index}`).classList.add("bg-green-400/50");
                } else {
                    document.getElementById(`notes${props.index}`).classList.add("bg-blue-400/50");
                    document.getElementById(`notes${props.index}`).classList.remove("bg-green-400/50");
                }
          }}        
          className="h-4 w-4 accent-green-600"
        ></input>
      </span>
    </p>
  );
};

export default Page;
