//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const photo = document.querySelector(".top img");
const enter = document.querySelector(".enter");
const desc = document.querySelector(".desc");




container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  title.style.transform = "translateZ(100px)";
  photo.style.transform = "translateZ(50px)";
  enter.style.transform = "translateZ(75px)";
  desc.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
  title.style.transform = "translateZ(0px)";
  photo.style.transform = "translateZ(0px)";
  enter.style.transform = "translateZ(0px)";
  desc.style.transform = "translateZ(0px)";
});

