import React,{useState} from 'react'

const Navbar = (props) => {


  const [play, setPlay] = useState(true);
  console.log(play)
 
  return (

    <>

    <div className='h-auto rounded w-full flex flex-row'>
    <button play={play} setPlay={setPlay} className='cursor-pointer bg-amber-700' onClick={()=>{setPlay(!play)}}>{play?"Game :Turn On ":"Game :Turn Off"}</button>
    </div>

    </>

  )
}

export default Navbar