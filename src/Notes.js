import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import Page from './Page';
const Notes = () => {
    const data=useSelector((state)=>{
        return state.users;
    })
    const data2=useSelector((state)=>{
      return state.colors;
  })
  console.log(data2)
  return ( 
    <div className='flex flex-col max-w-[800px]  min-w-[200px] mx-[20px] sm:mx-auto mt-[50px] gap-[30px]'>
     <div className="alert-box failure fixed bottom-[10vh] z-[300] left-[50%] translate-x-[-50%]">Task Incomplete!</div>
     <div className="alert-box success fixed bottom-[10vh] z-[300] left-[50%] translate-x-[-50%]">Task Completed!</div>
      {data.map((note,index)=>{
      
           return (
           <Page note={note} key={index} index={index}/>
           )
      })}
      
    </div>
  )
}

export default Notes;