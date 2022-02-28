const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
var category;

//when change a category, start from the 1st img and dot
const startOver = (currentSlide, currentDot) => {
  const firstSlide = track.firstElementChild;
  const firstDot = dotsNav.firstElementChild;
  moveToSlide(track, currentSlide, firstSlide);
  updateDots(currentDot, firstDot);
};

const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//moving to the last slide
const moveToEnd = (currentSlide, currentDot) => {
  const lastSlide = track.lastElementChild;
  const lastDot = dotsNav.lastElementChild;
  moveToSlide(track, currentSlide, lastSlide);
  updateDots(currentDot, lastDot);
};

//moving to target slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current_slide");
  targetSlide.classList.add("current_slide");
};

//updating the dots
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current_slide");
  targetDot.classList.add("current_slide");
};

//when i click left, moves slides to the left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current_slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current_slide");
  const prevDot = currentDot.previousElementSibling;

  //checking if its the 1st slide
  if (currentSlide.isSameNode(track.firstElementChild)) {
    moveToEnd(currentSlide, currentDot);
  } else {
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
  }
});

//when i click right, moves slides to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current_slide");
  const nextDot = currentDot.nextElementSibling;

  //checking if its the last slide
  if (currentSlide.isSameNode(track.lastElementChild)) {
    startOver(currentSlide, currentDot);
  } else {
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
  }
});

//when i click the nav indicators, move to that slide
dotsNav.addEventListener("click", (e) => {
  //what indicator was clicked on?
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current_slide");
  const currentDot = dotsNav.querySelector(".current_slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});
