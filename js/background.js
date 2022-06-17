const bgImgs = ["BG01.jpg", "BG02.jpg", "BG03.jpg", "BG04.jpg", "BG05.jpg", "BG06.jpg"];
const chosenImg = bgImgs[Math.floor(Math.random() * bgImgs.length)];
const bg = document.getElementById("background");

const bgImg = document.createElement("img");

bg.style.backgroundImage = `url("./img/${chosenImg}")`