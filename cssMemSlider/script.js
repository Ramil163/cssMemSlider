const button_1 = document.querySelector(".button1");
const button_2 = document.querySelector(".button2");
const button_3 = document.querySelector(".button3");
const button_4 = document.querySelector(".button4");
let basePos = 0;
const sliderContainer = document.querySelector(".slider-container");

button_1.addEventListener("click", (e) => {
  e.preventDefault();
  sliderContainer.style.left = "0px";
});
button_2.addEventListener("click", (e) => {
  e.preventDefault();
  sliderContainer.style.left = "-800px";
});
button_3.addEventListener("click", (e) => {
  e.preventDefault();
  sliderContainer.style.left = "-1600px";
});
button_4.addEventListener("click", (e) => {
  e.preventDefault();
  sliderContainer.style.left = "-2400px";
});
