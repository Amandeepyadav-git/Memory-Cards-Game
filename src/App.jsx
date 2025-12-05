import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

import A1 from "./assets/A1.jpg";
import A2 from "./assets/A2.jpg";
import A3 from "./assets/A3.jpg";
import A4 from "./assets/A4.jpg";

import J1 from "./assets/J1.jpg";
import J2 from "./assets/J2.jpg";
import J3 from "./assets/J3.jpg";
import J4 from "./assets/J4.jpg";

import K1 from "./assets/K1.jpg";
import K2 from "./assets/K2.jpg";
import K3 from "./assets/K3.jpg";
import K4 from "./assets/K4.jpg";

import Q1 from "./assets/Q1.jpg";
import Q2 from "./assets/Q2.jpg";
import Q3 from "./assets/Q3.jpg";
import Q4 from "./assets/Q4.jpg";

import Flip from "./assets/Flip.png";

import bg from "./assets/bg.jpg";

import Navbar from "./components/Navbar";
import Guessimg from "./Views/Guessimg";

function App(props) {

 const imgArr = [
  A1, A2, A3, A4, 
  J1, J2, J3, J4, 
  K1, K2, K3, K4, 
  Q1, Q2, Q3, Q4
];

const shuffleArray = (arr) => {
  const newArr = [...arr]; 
  // Copy to avoid mutating state
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
     [newArr[i], newArr[j]] = [newArr[j], newArr[i]]; // Swap
  }

  return newArr;
};

/*
this loop function is made by menodemo
imgArr = [
A1,A2,A3,A4,
J1,J2,J3,J4,
K1,K2,K3,K4,
Q1,Q2,Q3,Q4,
];
  const newArr = [];

  while(imgArr.length>0){
    const randomIndex = Math.floor(Math.random()*imgArr.length);

    const selected = imgArr.splice(randomIndex, 1)[0]
    newArr.push(selected);
  }
  
  console.log(newArr[1]);
*/

const newArr = shuffleArray(imgArr);

  //for game on-off button
  const [play, setPlay] = useState(false);
  const [even, setEven] = useState(0)
  return (
    <>
      <div className="h-screen w-screen bg-amber-100 flex flex-col">
        <div className="upperBox w-screen h-[10vh] bg-[#690404]">
          <Navbar
          newArr={newArr}
            play={play}
            onPlayChange={setPlay}
            Newgame={() => {
            }}
          />
        </div>
        <div
          className={`lowerBox w-screen h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col`}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="l1 flex flex-row pl-5 pt-5 pr-5 justify-evenly">
            <Cards Imgsrc={!play ? Flip : newArr[0]}/>
            <Cards Imgsrc={!play ? Flip : newArr[1]} />
            <Cards Imgsrc={!play ? Flip :  newArr[2]} />
            <Cards Imgsrc={!play ? Flip : newArr[3]} />
          </div>
          <div className="l1 flex flex-row pl-5 pt-5 pr-5 justify-evenly">
            <Cards Imgsrc={!play ? Flip : newArr[4]} />
            <Cards Imgsrc={!play ? Flip : newArr[5]} />
            <Cards Imgsrc={!play ? Flip : newArr[6]} />
            <Cards Imgsrc={!play ? Flip : newArr[7]} />
          </div>
          <div className="l3 flex flex-row pl-5 pt-5 pr-5 justify-evenly">
            <Cards Imgsrc={!play ? Flip :  newArr[8]} />
            <Cards Imgsrc={!play ? Flip : newArr[9]} />
            <Cards Imgsrc={!play ? Flip : newArr[10]} />
            <Cards Imgsrc={!play ? Flip :newArr[11]} />
          </div>
        </div>
        <Guessimg/>
      </div>
    </>
  );
}

export default App;
