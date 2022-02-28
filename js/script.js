/******************** Get the current year for the copyright ********************/
var cprightYear = document.getElementById("year");
var today = new Date();
var currentYear = today.getFullYear();
cprightYear.innerHTML = currentYear;

const cancelIcon = document.querySelector(".cancel_icon");
cancelIcon.addEventListener("click", (e) => {
  let navBarContainer = document.querySelector(".nav_bar-container");
  navBarContainer.style.right = "-100%";

  dropDownMenu.style.display = "block";
  cancelIcon.style.display = "none";
});

const dropDownMenu = document.querySelector(".drop-down-menu");
dropDownMenu.addEventListener("click", (e) => {
  let navBarContainer = document.querySelector(".nav_bar-container");
  navBarContainer.style.right = "0%";

  dropDownMenu.style.display = "none";
  cancelIcon.style.display = "block";
});

const scrollToTopButton = document.querySelector(".scrollToTop");
scrollToTopButton.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset < 100) scrollToTopButton.style.display = "none";
  else scrollToTopButton.style.display = "block";
});

window.addEventListener("DOMContentLoaded", (e) => {
  if (window.pageYOffset < 100) scrollToTopButton.style.display = "none";
  else scrollToTopButton.style.display = "block";
});
