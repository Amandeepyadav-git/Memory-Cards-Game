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

function App() {
  let arr = [A1, A2, A3, A4, J1, J2, J3, J4, K1, K2, K3, K4, Q1, Q2, Q3, Q4];

  const R = Math.floor(Math.random() * arr.length);

 const [play, setPlay] = useState(false)

  return (
    <>
      <div className="h-screen w-screen bg-amber-100 flex flex-col">
        <div className="upperBox w-screen h-[10vh] bg-[#690404]">
          <Navbar
          play={play}
           onPlayChange={setPlay}
            Newgame={() => {
              console.log("Hello");
            }}
          />
        </div>
        <div className={`lowerBox w-screen h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col`} style={{ backgroundImage: `url(${bg})` }}>
          <div className="l1 flex flex-row pl-5 pt-5 pr-5 justify-evenly">
            <Cards Imgsrc={!play ?Flip: A1} />
            <Cards Imgsrc={!play ?Flip: J1} />
            <Cards Imgsrc={!play ?Flip: Q3} />
            <Cards Imgsrc={!play ?Flip: A1} />
          </div>
          <div className="l1 flex flex-row pl-5 pt-5 pr-5 justify-evenly">
            <Cards Imgsrc={!play ?Flip: Q1} />
            <Cards Imgsrc={!play ?Flip: A1} />
            <Cards Imgsrc={!play ?Flip: A1} />
            <Cards Imgsrc={!play ?Flip: A1} />
          </div>
          <div className="l3 flex flex-row pl-5 pt-5 pr-5 justify-evenly">
            <Cards Imgsrc={!play ?Flip: A1} />
            <Cards Imgsrc={!play ?Flip: A1} />
            <Cards Imgsrc={!play ?Flip: A1} />
            <Cards Imgsrc={!play ?Flip: A1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
