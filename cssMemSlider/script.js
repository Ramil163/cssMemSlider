const button_1 = document.querySelector(".button1");
const button_2 = document.querySelector(".button2");
const button_3 = document.querySelector(".button3");
const button_4 = document.querySelector(".button4");
const title = document.querySelector(".title");
let basePos = 0;
const sliderContainer = document.querySelector(".slider-container");

button_1.addEventListener("click", (e) => {
  e.preventDefault();
  sliderContainer.style.left = "0px";
  title.innerHTML = "One Does Not Simply Walk Into Mordor";
  title.classList.toggle("rotate");
});
button_2.addEventListener("click", (e) => {
  e.preventDefault();
  sliderContainer.style.left = "-800px";
  title.innerHTML = "Feel it? It's the smell of the weekend";
  title.classList.toggle("rotate");
});
button_3.addEventListener("click", (e) => {
  e.preventDefault();
  sliderContainer.style.left = "-1600px";
  title.innerHTML = "Let's do the next task";
  title.classList.toggle("rotate");
});
button_4.addEventListener("click", (e) => {
  e.preventDefault();
  sliderContainer.style.left = "-2400px";
  title.innerHTML = "I wanted to do it on time";
  title.classList.toggle("rotate");
});
