const track = document.querySelector(".feedback_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".feedback_button--right");
const prevButton = document.querySelector(".feedback_button--left");
const dotsNav = document.querySelector(".feedback_nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//moving to the last slide
const moveToEnd = (currentFeedback, currentDot) => {
  const lastFeedback = track.lastElementChild;
  const lastDot = dotsNav.lastElementChild;
  moveToSlide(track, currentFeedback, lastFeedback);
  updateDots(currentDot, lastDot);
};

//when change a category, start from the 1st img and dot
const startOver = (currentFeedback, currentDot) => {
  const firstFeedback = track.firstElementChild;
  const firstDot = dotsNav.firstElementChild;
  moveToSlide(track, currentFeedback, firstFeedback);
  updateDots(currentDot, firstDot);
};

//moving to target slide
const moveToSlide = (track, currentFeedback, targetFeedback) => {
  track.style.transform = "translateX(-" + targetFeedback.style.left + ")";
  currentFeedback.classList.remove("current_feedback");
  targetFeedback.classList.add("current_feedback");
};

//updating the dots
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current_feedback");
  targetDot.classList.add("current_feedback");
};

//when i click left, moves slides to the left
prevButton.addEventListener("click", (e) => {
  const currentFeedback = track.querySelector(".current_feedback");
  const prevFeedback = currentFeedback.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current_feedback");
  const prevDot = currentDot.previousElementSibling;

  //checking if its the 1st slide
  if (currentFeedback.isSameNode(track.firstElementChild)) {
    moveToEnd(currentFeedback, currentDot);
  } else {
    moveToSlide(track, currentFeedback, prevFeedback);
    updateDots(currentDot, prevDot);
  }
});

//when i click right, moves slides to the right
nextButton.addEventListener("click", (e) => {
  const currentFeedback = track.querySelector(".current_feedback");
  const nextFeedback = currentFeedback.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current_feedback");
  const nextDot = currentDot.nextElementSibling;

  //checking if its the last slide
  if (currentFeedback.isSameNode(track.lastElementChild)) {
    startOver(currentFeedback, currentDot);
  } else {
    moveToSlide(track, currentFeedback, nextFeedback);
    updateDots(currentDot, nextDot);
  }
});

//when i click the nav indicators, move to that slide
dotsNav.addEventListener("click", (e) => {
  //what indicator was clicked on?
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentFeedback = track.querySelector(".current_feedback");
  const currentDot = dotsNav.querySelector(".current_feedback");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetFeedback = slides[targetIndex];

  moveToSlide(track, currentFeedback, targetFeedback);
  updateDots(currentDot, targetDot);
});
