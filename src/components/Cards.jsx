import React,{useState} from 'react'

const Cards = ({Imgsrc,index},props) => {

  return (
    <>
    <div className="h-[25vh] bg-cover bg-white w-[10vw] rounded-3xl text-red">
    <img src={Imgsrc} key={index} alt="Hero image" className="w-full h-64 object-cover rounded-xl" />      
    </div>
    </>
  )
}

export default Cards