"use strict";

const menuBtn = document.querySelector(".mobile-menu");
const navlinks = document.querySelector(".navbar-links");

menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("hide");
  console.log(menuBtn, navlinks);
});
console.log(menuBtn, navlinks);
//
