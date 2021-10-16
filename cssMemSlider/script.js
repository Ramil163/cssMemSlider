const button_1 = document.querySelector(".button1");
const button_2 = document.querySelector(".button2");
const button_3 = document.querySelector(".button3");
const button_4 = document.querySelector(".button4");
const but_1 = document.querySelector(".but1");
const but_2 = document.querySelector(".but2");
const but_3 = document.querySelector(".but3");
const but_4 = document.querySelector(".but4");

const title = document.querySelector(".title");
let basePos = 0;
const sliderContainer = document.querySelector(".slider-container");

button_1.classList.add("pressed");
but_1.addEventListener("click", (e) => {
  e.preventDefault();
  sliderContainer.style.left = "0px";
  title.innerHTML = "One Does Not Simply Walk Into Mordor!";
  title.classList.toggle("rotate");
  button_1.classList.add("pressed");
  button_2.classList.remove("pressed");
  button_3.classList.remove("pressed");
  button_4.classList.remove("pressed");
});

but_1.addEventListener("mousemove", (e) => {
  e.preventDefault();
  button_1.classList.add("mouseenter");
});

but_1.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  // button_1.classList.add("mouseenter");
  button_1.classList.remove("mouseenter");
});

but_2.addEventListener("click", (e) => {
  e.preventDefault();
  sliderContainer.style.left = "-800px";
  title.innerHTML = "Feel it? It's the smell of the weekend!";
  title.classList.toggle("rotate");
  button_1.classList.add("pressed");

  button_1.classList.remove("pressed");
  button_2.classList.add("pressed");
  button_3.classList.remove("pressed");
  button_4.classList.remove("pressed");
});

but_2.addEventListener("mousemove", (e) => {
  e.preventDefault();
  button_2.classList.add("mouseenter");
});

but_2.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  // button_1.classList.add("mouseenter");
  button_2.classList.remove("mouseenter");
});

but_3.addEventListener("click", (e) => {
  e.preventDefault();
  sliderContainer.style.left = "-1600px";
  title.innerHTML = "Let's do the next task";
  title.classList.toggle("rotate");
  button_1.classList.remove("pressed");
  button_2.classList.remove("pressed");
  button_3.classList.add("pressed");
  button_4.classList.remove("pressed");
});
but_3.addEventListener("mousemove", (e) => {
  e.preventDefault();
  button_3.classList.add("mouseenter");
});

but_3.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  // button_1.classList.add("mouseenter");
  button_3.classList.remove("mouseenter");
});

but_4.addEventListener("click", (e) => {
  e.preventDefault();
  sliderContainer.style.left = "-2400px";
  title.innerHTML = "I wanted to do it on time";
  title.classList.toggle("rotate");
  button_1.classList.remove("pressed");
  button_2.classList.remove("pressed");
  button_3.classList.remove("pressed");
  button_4.classList.add("pressed");
});
but_4.addEventListener("mousemove", (e) => {
  e.preventDefault();
  button_4.classList.add("mouseenter");
});

but_4.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  // button_1.classList.add("mouseenter");
  button_4.classList.remove("mouseenter");
});
