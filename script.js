const hamburgerDiv = document.querySelector(".hamburger");
const navElement = document.querySelector(".nav");

hamburgerDiv.addEventListener("click", () => {
  hamburgerDiv.classList.toggle("active");
  navElement.classList.toggle("active")

});
