const bgc = document.getElementById("body");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
red.addEventListener("click", () => {
  bgc.classList.remove("green", "blue","black","yellow","skyblue"); 
  bgc.classList.add("red");
});

blue.addEventListener("click", () => {
  bgc.classList.remove("red", "green","black","yellow","skyblue"); 
  bgc.classList.add("blue");
});

green.addEventListener("click", () => {
  bgc.classList.remove("red", "blue","black","yellow","skyblue"); 
  bgc.classList.add("green");
});

black.addEventListener("click", () => {
  bgc.classList.remove("red", "blue","green","yellow","skyblue"); 
  bgc.classList.add("black");
});

yellow.addEventListener("click", () => {
  bgc.classList.remove("red", "blue","green","black","skyblue"); 
  bgc.classList.add("yellow");
});

skyblue.addEventListener("click", () => {
  bgc.classList.remove("red", "blue","green","black","yellow"); 
  bgc.classList.add("skyblue");
});





