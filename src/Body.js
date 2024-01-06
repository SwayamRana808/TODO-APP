import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from "../utils/slice";
import { addColor } from '../utils/colorSlice';
const Body = () => {
    const [areaText,setareaText]=useState("");
    const [notes,setNotes]=useState([])
    const dispatch=useDispatch();
    const handleClear=()=>{
      setareaText("");
    }
    // useEffect(()=>{
    //     console.log()
    // },[notes])
      const handleNote=()=>{
                          const updatenote =areaText;
                          dispatch(addNote(updatenote))
                          dispatch(addColor(false));
                          setNotes([updatenote,...notes]);
                          
                }
  return (
    <div className=''>
      <textarea value={areaText} spellCheck="false" onChange={(e)=>{
           setareaText(e.target.value)
      }} className='sm:min-h-[190px] min-h-[50px] font-["Nanum_Pen_Script"]  
        p-[10px]  focus:border-white focus:border-2 focus:outline-none w-[200px] sm:w-[480px] block mx-auto
        bg-white/50 mt-[20px] rounded-[15px] text-[20px] sm:text-[30px]'>
      </textarea>
      <div className='w-[fit-content] mx-auto mt-[20px]'>
      {/* <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Blue</button> */}
      <button type="button" onClick={()=>{if(areaText!=="")handleNote()}} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br   shadow-sm shadow-white/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Note</button>
      <button type="button" onClick={handleClear} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-sm shadow-white/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Clear Text</button>
      </div>
      
      </div>
  )
}
export default Body;