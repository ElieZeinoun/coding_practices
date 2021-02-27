// 1 -- Select each circle

let grayCircle = document.getElementById("grayButton");
let whiteCircle = document.getElementById("whiteButton");
let blueCircle = document.getElementById("blueButton");
let yellowCircle = document.getElementById("yellowButton");

// 2 -- Add an event listener to each circle



grayCircle.addEventListener("click", turnGray);
whiteCircle.addEventListener('click', turnWhite);
blueCircle.addEventListener('click', turnBlue);
yellowCircle.addEventListener('click', turnYellow);

// 3 -- Write an event handler to change the color of the page when each circle is pressed.

function turnGray(){
    console.log("gray button")
    let body = document.querySelector("body");
    body.style.backgroundColor = "gray";
//another method to do the above
    body.classList.add("gray");
}

function turnWhite(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";
}

function turnBlue(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

function turnYellow(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "yellow";
}