import { magicMouse } from "./magic_mouse.js"

let intro = document.querySelector(".intro-opening");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo-opening");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  
}else{
  const options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "pointer-overlay",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
  };
  magicMouse(options);
}