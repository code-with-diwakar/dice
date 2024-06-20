const image = document.getElementById("image");
const roll = document.getElementById("roll");
const number = document.getElementById("number");
const image1=document.getElementById("image1");
const roll1=document.getElementById("roll1");
const number1=document.getElementById("number1")
const disp=document.getElementById("disp")

let randomNumber = Math.floor(Math.random()*6)+1;
let randomNumber2=Math.floor(Math.random()*6)+1;
roll.addEventListener("click",()=>{
    number.innerHTML= randomNumber;
    image.setAttribute("src",`./image/${randomNumber}.jpeg`);
    number1.innerHTML=randomNumber2;
    image1.setAttribute("src",`./image/${randomNumber2}.jpeg`)

})
if(randomNumber2 > randomNumber){
 roll1.innerHTML="Player 2 win"
}

else if(randomNumber2 < randomNumber){
  roll1.innerHTML="player 1 win"
}else{
  roll1.innerHTML="match draw"
}