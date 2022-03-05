const hamburgerEl = document.querySelector("#hamburger");
const overlayEl = document.querySelector("#overlay");
const bodyEl = document.querySelector("body");

hamburgerEl.addEventListener("click", () => {
  if (hamburgerEl.classList.contains("active")) {
    hamburgerEl.classList.remove("active");
    overlayEl.classList.remove("active");
    bodyEl.classList.remove("noscroll");
  } else {
    hamburgerEl.classList.add("active");
    overlayEl.classList.add("active");
    bodyEl.classList.add("noscroll");
  }
});

overlayEl.addEventListener("click", () => {
  hamburgerEl.classList.remove("active");
  overlayEl.classList.remove("active");
  bodyEl.classList.remove("noscroll");
});
