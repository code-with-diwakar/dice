const image = document.getElementById("image");
const roll = document.getElementById("roll");
const number = document.getElementById("number");
const image1 = document.getElementById("image1");
const number1 = document.getElementById("number1");
const disp = document.getElementById("disp");
const reset = document.getElementById("reset");

roll.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    number.innerHTML = randomNumber;
    image.setAttribute("src", `./image/${randomNumber}.jpeg`);
    image.classList.add('show'); // Show the image
    
    number1.innerHTML = randomNumber2;
    image1.setAttribute("src", `./image/${randomNumber2}.jpeg`);
    image1.classList.add('show'); // Show the image
    
    if (randomNumber2 > randomNumber) {
        disp.innerHTML = "Player 2 wins!";
    } else if (randomNumber2 < randomNumber) {
        disp.innerHTML = "Player 1 wins!";
    } else {
        disp.innerHTML = "It's a draw!";
    }
});

reset.addEventListener("click", () => {
    number.innerHTML = "DISPLAYED NUMBER";
    image.setAttribute("src", "");
    image.classList.remove('show'); // Hide the image
    
    number1.innerHTML = "DISPLAYED NUMBER";
    image1.setAttribute("src", "");
    image1.classList.remove('show'); // Hide the image
    
    disp.innerHTML = "";
});
