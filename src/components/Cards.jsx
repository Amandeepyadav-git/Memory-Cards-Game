import React,{props} from 'react'

const Cards = ({Imgsrc,index}) => {


  return (
    <>
    <div className="h-[25vh] bg-cover bg-white w-[10vw] text-red">
    <img src={Imgsrc} key={index} alt="Hero image" className="w-full h-64 object-cover rounded-xl" />      
    </div>
    </>
  )
}

export default Cards