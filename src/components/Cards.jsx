import React,{useState} from 'react'

const Cards = ({Imgsrc,index},props) => {

  return (
    <>
    <div value={Imgsrc} className="h-[25vh] bg-cover bg-white w-[10vw] rounded-3xl text-red shadow-[10px_0_10px_-2px_rgba(0,0,0,0.5),-10px_0_10px_-2px_rgba(0,0,0,0.5)]">
    <img src={Imgsrc} key={index} alt="Hero image" className="w-full h-64 object-cover rounded-xl" />      
    </div>
    </>
  )
}

export default Cards