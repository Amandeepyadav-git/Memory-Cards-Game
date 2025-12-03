import React,{useState} from 'react'

const Navbar = ({play,onPlayChange, newArr}) => {

  const [imgExtend, setmgExtend] = useState(false)

  const randomIndex = Math.floor(Math.random() * newArr.length);

  const img = newArr[randomIndex]
  console.log(img)
 
  return (

    <>
    <div className='h-auto rounded w-full flex flex-row justify-between p-10 pb-5'>
    <button className='cursor-pointer h-[50px] w-[170px] bg-amber-700' onClick={()=>{onPlayChange(!play)}}>{play?"Game :Show Cards ":"Game :Hide Cards"}</button>
    <div className='flex flex-row gap-5'>
      <div className={imgExtend? " h-[80%] w-[30%] mt-15 -ml-[56%] absolute" : " h-[80%] w-[40px] bg-blue-500"}><img className='h-full w-full' src={img} alt=""/></div>
      <button className='cursor-pointer h-[50px] w-[100px] p-2 bg-amber-700' onClick={()=>{setmgExtend(!imgExtend)}}>Let's begin</button>
    </div>
    </div>
    </>
    
  )
}

export default Navbar
