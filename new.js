import { useState } from "react";

const imgArr = ["A1","A2","A3","A4","J1","J2","J3","J4","Q1","Q2","Q3","Q4","K1","K2","K3","K4"];
// const imgArr = [A1,A2,A3,A4,J1,J2,J3,J4,Q1,Q2,Q3,Q4,K1,K2,K3,K4];
const newArr = [];

function redStart(){

const randomIndex = Math.floor(Math.random(imgArr.length)*imgArr.length);

const splicedVal = imgArr.splice(randomIndex, 1)[0];

newArr.push(splicedVal);


}
redStart();

// console.log("Removed:", splicedVal);
console.log("Remaining:", imgArr);
console.log("New array:", newArr);
// setImgArr(imgArr);
console.log(imgArr)