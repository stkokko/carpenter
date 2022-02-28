// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBSU9MMsig5DMrgIXgJXDlsJVk0DFOr0uc",
    authDomain: "carpenter-94002.firebaseapp.com",
    databaseURL: "https://carpenter-94002-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "carpenter-94002",
    storageBucket: "carpenter-94002.appspot.com",
    messagingSenderId: "759033499334",
    appId: "1:759033499334:web:d30bbcf335685474d411c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let feedbackInfo = firebase.database().ref("Feedbacks");

const feedbackForm = document.querySelector(".comment_form form");
const addCommentBtn = document.querySelector(".feedback_add_comment");
const popUpBG = document.querySelector(".pop_up_bg");
const closeBtn = document.querySelector(".close");
const body = document.querySelector("body");

//on Esc key down close pop-up
body.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    popUpBG.style.display = "none";
    body.style.overflow = "auto";
  }
});

addCommentBtn.addEventListener("click", (e) => {
  //show pop-up
  popUpBG.style.display = "flex";
  body.style.overflow = "hidden";
  message.innerHTML = "";
});

closeBtn.addEventListener("click", (e) => {
  //close pop-up
  popUpBG.style.display = "none";
  body.style.overflow = "auto";

  //clear form
  feedbackForm.reset();
  defaultStars();
  starClicked("");
  message.innerHTML = "";
  msgFirstName.innerHTML = "";
  msgLastName.innerHTML = "";
  feedbackMsg.innerHTML = "";
});

let message = document.querySelector(".warning");
let msgFirstName = document.querySelector(".wrong_firstName");
let msgLastName = document.querySelector(".wrong_lastName");
let feedbackMsg = document.querySelector(".wrong_feedbackMsg");
let starBar = document.querySelector(".star_bar");

let lastStarClicked = "";
let firstStar = starBar.querySelector(".first");
let firstStarClicked = false;
let secondStar = starBar.querySelector(".second");
let secondStarClicked = false;
let thirdStar = starBar.querySelector(".third");
let thirdStarClicked = false;
let fourthStar = starBar.querySelector(".fourth");
let fourthStarClicked = false;
let fifthStar = starBar.querySelector(".fifth");
let fifthStarClicked = false;

//show first Star
function showFirstStar() {
  secondStar.classList.remove("checked");
  thirdStar.classList.remove("checked");
  fourthStar.classList.remove("checked");
  fifthStar.classList.remove("checked");

  secondStar.classList.add("unchecked");
  thirdStar.classList.add("unchecked");
  fourthStar.classList.add("unchecked");
  fifthStar.classList.add("unchecked");
} //end of showFirstStar

//hovering over first star
firstStar.addEventListener("mouseover", (e) => {
  defaultStars();
  showFirstStar();
});

//unhovering over first star
firstStar.addEventListener("mouseout", (e) => {
  showLastStarClicked();

  if (!firstStarClicked && lastStarClicked == "") {
    secondStar.classList.remove("unchecked");
    thirdStar.classList.remove("unchecked");
    fourthStar.classList.remove("unchecked");
    fifthStar.classList.remove("unchecked");

    secondStar.classList.add("checked");
    thirdStar.classList.add("checked");
    fourthStar.classList.add("checked");
    fifthStar.classList.add("checked");
  } //end of if
});

//clicking on first star
firstStar.addEventListener("click", (e) => {
  starClicked("first");
  showFirstStar();
});

//show second star
function showSecondStar() {
  if (lastStarClicked == "second") {
    secondStar.classList.remove("unchecked");
    secondStar.classList.add("checked");
  } //end of if
  thirdStar.classList.remove("checked");
  fourthStar.classList.remove("checked");
  fifthStar.classList.remove("checked");

  thirdStar.classList.add("unchecked");
  fourthStar.classList.add("unchecked");
  fifthStar.classList.add("unchecked");
} //end of showSecondStar

//hovering over second star
secondStar.addEventListener("mouseover", (e) => {
  defaultStars();
  showSecondStar();
});

//unhovering over second star
secondStar.addEventListener("mouseout", (e) => {
  showLastStarClicked();

  if (!secondStarClicked && lastStarClicked == "") {
    thirdStar.classList.remove("unchecked");
    fourthStar.classList.remove("unchecked");
    fifthStar.classList.remove("unchecked");

    thirdStar.classList.add("checked");
    fourthStar.classList.add("checked");
    fifthStar.classList.add("checked");
  } //end of if
});

//clicking on second star
secondStar.addEventListener("click", (e) => {
  starClicked("second");
  showSecondStar();
});

//show third star
function showThirdStar() {
  if (lastStarClicked == "third") {
    secondStar.classList.remove("unchecked");
    secondStar.classList.add("checked");
    thirdStar.classList.remove("unchecked");
    thirdStar.classList.add("checked");
  } //end of if
  fourthStar.classList.remove("checked");
  fifthStar.classList.remove("checked");

  fourthStar.classList.add("unchecked");
  fifthStar.classList.add("unchecked");
} //end of showThirdStar

//hovering over third star
thirdStar.addEventListener("mouseover", (e) => {
  defaultStars();
  showThirdStar();
});

//unhovering over third star
thirdStar.addEventListener("mouseout", (e) => {
  showLastStarClicked();

  if (!thirdStarClicked && lastStarClicked == "") {
    fourthStar.classList.remove("unchecked");
    fifthStar.classList.remove("unchecked");

    fourthStar.classList.add("checked");
    fifthStar.classList.add("checked");
  } //end of if
});

//clicking on third star
thirdStar.addEventListener("click", (e) => {
  starClicked("third");
  showThirdStar();
});

//show fourth star
function showFourthStar() {
  if (lastStarClicked == "fourth") {
    secondStar.classList.remove("unchecked");
    secondStar.classList.add("checked");
    thirdStar.classList.remove("unchecked");
    thirdStar.classList.add("checked");
    fourthStar.classList.remove("unchecked");
    fourthStar.classList.add("checked");
  } //end of if
  fifthStar.classList.remove("checked");

  fifthStar.classList.add("unchecked");
} //end of showFourthStar

//hovering over fourth star
fourthStar.addEventListener("mouseover", (e) => {
  defaultStars();
  showFourthStar();
});

//unhovering over fourth star
fourthStar.addEventListener("mouseout", (e) => {
  showLastStarClicked();

  if (!fourthStarClicked && lastStarClicked == "") {
    fifthStar.classList.remove("unchecked");

    fifthStar.classList.add("checked");
  } //end of if
});

//clicking on fourth star
fourthStar.addEventListener("click", (e) => {
  starClicked("fourth");
  showFourthStar();
});

//hovering over fifth star
fifthStar.addEventListener("mouseover", (e) => {
  defaultStars();
});

//unhovering over fifth star
fifthStar.addEventListener("mouseout", (e) => {
  showLastStarClicked();
});

//clicking on fifth star
fifthStar.addEventListener("click", (e) => {
  starClicked("fifth");
  defaultStars();
});

//show all stars as checked - default mode
function defaultStars() {
  firstStar.classList.remove("unchecked");
  secondStar.classList.remove("unchecked");
  thirdStar.classList.remove("unchecked");
  fourthStar.classList.remove("unchecked");
  fifthStar.classList.remove("unchecked");

  firstStar.classList.add("checked");
  secondStar.classList.add("checked");
  thirdStar.classList.add("checked");
  fourthStar.classList.add("checked");
  fifthStar.classList.add("checked");
} //end of defaultStars

//update the chosen stars
function starClicked(star) {
  switch (star) {
    case "first":
      firstStarClicked = true;
      secondStarClicked = false;
      thirdStarClicked = false;
      fourthStarClicked = false;
      fifthStarClicked = false;

      lastStarClicked = "first";
      message.innerHTML = "";
      break;
    case "second":
      firstStarClicked = false;
      secondStarClicked = true;
      thirdStarClicked = false;
      fourthStarClicked = false;
      fifthStarClicked = false;

      lastStarClicked = "second";
      message.innerHTML = "";
      break;
    case "third":
      firstStarClicked = false;
      secondStarClicked = false;
      thirdStarClicked = true;
      fourthStarClicked = false;
      fifthStarClicked = false;

      lastStarClicked = "third";
      message.innerHTML = "";
      break;
    case "fourth":
      firstStarClicked = false;
      secondStarClicked = false;
      thirdStarClicked = false;
      fourthStarClicked = true;
      fifthStarClicked = false;

      lastStarClicked = "fourth";
      message.innerHTML = "";
      break;
    case "fifth":
      firstStarClicked = false;
      secondStarClicked = false;
      thirdStarClicked = false;
      fourthStarClicked = false;
      fifthStarClicked = true;

      lastStarClicked = "fifth";
      message.innerHTML = "";
      break;
    default:
      firstStarClicked = false;
      secondStarClicked = false;
      thirdStarClicked = false;
      fourthStarClicked = false;
      fifthStarClicked = false;
      lastStarClicked = "";
      message.innerHTML = "";
  } //end of switch
} //end of starClicked

//show the stars user chose
function showLastStarClicked() {
  if (lastStarClicked == "") return;
  else {
    if (lastStarClicked == "first") {
      showFirstStar();
    } else if (lastStarClicked == "second") {
      showSecondStar();
    } else if (lastStarClicked == "third") {
      showThirdStar();
    } else if (lastStarClicked == "fourth") {
      showFourthStar();
    } else if (lastStarClicked == "fifth") {
      defaultStars();
    } //end of if/else if
  } //end of if/else
} //end of showLastStarClicked

//return the number of stars the user selected
function starSelected() {
  let star;
  switch (lastStarClicked) {
    case "first":
      star = 1;
      break;
    case "second":
      star = 2;
      break;
    case "third":
      star = 3;
      break;
    case "fourth":
      star = 4;
      break;
    case "fifth":
      star = 5;
      break;
    default:
      star = false;
  } //end of switch
  return star;
} //end of starSelected

//submit feedback form
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let star = starSelected();

  if (star > 0 && validFirstName && validLastName && validFdbck) {
    saveFeedback(firstName.value, lastName.value, msgFeedback.value, star);

    //clear form
    feedbackForm.reset();
    defaultStars();
    starClicked("");

    //close pop-up
    popUpBG.style.display = "none";

    //retrieve the 4 latest feedbacks with 4 or higher star
    updateFeedbacks();
  } else if (star <= 0) {
    //message for selecting a star
    message.innerHTML = "Βαθμολογήστε μας βασει της παραπάνω μπάρας";
    message.style.fontSize = "12px";
  } //end of if/else
});

//saving feedback into firebase
function saveFeedback(firstName, lastName, message, star) {
  let newFeedback = feedbackInfo.push();

  newFeedback.set({
    firstName: firstName,
    lastName: lastName,
    message: message,
    star: star,
  });
} //end of saveFeedback

//comment filter
const wordsWithTone = [
  "λίγος",
  "μέτριος",
  "απαράδεκτος",
  "καλούτσικος",
  "κακός",
  "ακριβός",
  "καθόλου",
  "πρέπει",
  "παρόλο",
];
const wordsWithoutTone = [
  "λιγος",
  "μετριος",
  "απαραδεκτος",
  "καλουτσικος",
  "κακος",
  "ακριβος",
  "καθολου",
  "πρεπει",
  "παρολο",
];

//filtering comments
function acceptableComment(comment) {
  for (let i = 0; i < wordsWithTone.length; i++) {
    if (comment.toLowerCase().includes(wordsWithTone[i])) return false;
  } //end of for

  for (let i = 0; i < wordsWithoutTone.length; i++) {
    if (comment.toLowerCase().includes(wordsWithoutTone[i])) return false;
  } //end of for

  return true;
} //end of acceptableComment

//updating feedbacks
function updateFeedbacks() {
  let feedbackInfo = firebase.database().ref("Feedbacks");
  let feedbacks = [];

  //retrieving data from firebase
  feedbackInfo.once("value", function (data) {
    let info = data.val();
    let keys = Object.keys(info);

    let latestFeedbacks = 0;
    for (let i = keys.length - 1; i >= 0; i--) {
      let feedbackInfo = keys[i];

      //acceptable feedback
      if (
        info[feedbackInfo].star >= 4 &&
        acceptableComment(info[feedbackInfo].message)
      ) {
        latestFeedbacks++;

        feedbacks[latestFeedbacks - 1] = {
          firstName: info[feedbackInfo].firstName,
          lastName: info[feedbackInfo].lastName,
          feedback: info[feedbackInfo].message,
          star: info[feedbackInfo].star,
        };
      } //end of if

      //reached the number of acceptable feedbacks
      if (latestFeedbacks == 4) break;
    } //end of for

    let feedbackElements = document.querySelectorAll(".feedback");

    for (let i = 0; i < feedbackElements.length; i++) {
      console.log(feedbacks[i]);

      feedbackElements[i].querySelector("q").innerHTML = feedbacks[i].feedback;
      feedbackElements[i].querySelector("h4").innerHTML =
        feedbacks[i].lastName + " " + feedbacks[i].firstName;
    } //end of for
  });
} //end of updateFeedbacks

//on page load display feedbacks
window.addEventListener("load", (e) => {
  updateFeedbacks();
});

//Get input values
const firstName = feedbackForm.querySelector("#firstName");
const lastName = feedbackForm.querySelector("#lastName");
const msgFeedback = feedbackForm.querySelector("#msgArea");

let validFirstName = false;
let validLastName = false;
let validFdbck = false;

firstName.addEventListener("keyup", (e) => {
  if (validInput(firstName.value)) {
    msgFirstName.innerHTML = "";
    validFirstName = true;
  } else {
    msgFirstName.innerHTML =
      "αριθμοί και ειδικοί χαρακτήρες δεν είναι αποδεκτοί";
    validFirstName = false;
  }

  if (firstName.value == "") msgFirstName.innerHTML = "";
});

lastName.addEventListener("keyup", (e) => {
  if (validInput(lastName.value)) {
    msgLastName.innerHTML = "";
    validLastName = true;
  } else {
    msgLastName.innerHTML =
      "αριθμοί και ειδικοί χαρακτήρες δεν είναι αποδεκτοί";
    validLastName = false;
  }

  if (lastName.value == "") msgLastName.innerHTML = "";
});

msgFeedback.addEventListener("keyup", (e) => {
  if (validFeedback(msgFeedback.value)) {
    feedbackMsg.innerHTML = "";
    validFdbck = true;
  } else {
    feedbackMsg.innerHTML = "εισάγετε ένα έγκυρο μήνυμα";
    validFdbck = false;
  }

  if (msgFeedback.value == "") feedbackMsg.innerHTML = "";
});

function validInput(input) {
  return input.match(/^[A-Za-zΑ-Ωα-ωάέόίύώήΆΈΌΊΎΏΉϋ]+$/);
} //end of validInput

//accepts whitespaces between words [^-\s], all letters from english and greek alphabet, greek letters with tone, commas, full stop, hyphen, apostrophos and exclamation mark
function validFeedback(input) {
  return input.match(/^[^-\s][a-zA-ZΑ-Ωα-ω0-9 άέόίύώήΆΈΌΊΎΏΉϋ'΄.,!-]{0,150}$/);
} //end of validFeedback
