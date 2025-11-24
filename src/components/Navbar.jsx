import React,{useState} from 'react'

const Navbar = ({play,onPlayChange}) => {

 
  return (

    <>
    <div className='h-auto rounded w-full flex flex-row'>
    <button className='cursor-pointer bg-amber-700' onClick={()=>{onPlayChange(!play)}}>{play?"Game :Turn On ":"Game :Turn Off"}</button>
    </div>
    </>
    
  )
}

export default Navbar