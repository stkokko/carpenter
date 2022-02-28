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


let contactInfo = firebase.database().ref("ContactInfo");

document
  .querySelector(".contact_form form")
  .addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //Get input values
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let email = document.querySelector("#emailAddress").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#msgArea").value;

  if (validFirstName && validLastName && validTxtbck) {
    saveContactInfo(firstName, lastName, email, subject, message);

    document.querySelector(".contact_form form").reset();

    sendEmail(firstName, lastName, email, subject, message);
  } //end of if
} //end of submitForm

//Save contact info in Firebase
function saveContactInfo(firstName, lastName, email, subject, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    subject: subject,
    message: message,
  });
} //end of saveContactInfo

function sendEmail(firstName, lastName, email, subject, message) {
  Email.send({
    SecureToken: "aac5e546-d3f4-47ab-8f6d-8ec300449caa",
    Host: "smtp.gmail.com",
    Username: "kostasropokis@gmail.com",
    Password: "ddhyzflxflndyubg",
    To: "kostasropokis@gmail.com",
    From: email,
    Subject: subject,
    Body:
      "Όνομα: " +
      firstName +
      "<br/>" +
      "Επώνυμο: " +
      lastName +
      "<br/>" +
      "email: " +
      email +
      "<br/>" +
      "<br/>" +
      message,
  })
    .then((message) => {
      alertBoxContainer.style.display = "flex";
      body.style.overflow = "hidden";
    })
    .catch((message) => alert("Something went wrong"));
  }

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const message = document.querySelector("#msgArea");

let msgFirstName = document.querySelector(".wrong_firstName");
let msgLastName = document.querySelector(".wrong_lastName");
let textMsg = document.querySelector(".wrong_textMsg");

let validFirstName = false;
let validLastName = false;
let validTxtbck = false;

firstName.addEventListener("keyup", (e) => {
  if (validName(firstName.value)) {
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
  if (validName(lastName.value)) {
    msgLastName.innerHTML = "";
    validLastName = true;
  } else {
    msgLastName.innerHTML =
      "αριθμοί και ειδικοί χαρακτήρες δεν είναι αποδεκτοί";
    validLastName = false;
  }

  if (lastName.value == "") msgLastName.innerHTML = "";
});

message.addEventListener("keyup", (e) => {
  if (validMessage(message.value)) {
    textMsg.innerHTML = "";
    validTxtbck = true;
  } else {
    textMsg.innerHTML = "εισάγετε ένα έγκυρο μήνυμα";
    validTxtbck = false;
  }

  if (message.value == "") textMsg.innerHTML = "";
});

function validName(input) {
  return input.match(/^[A-Za-zΑ-Ωα-ωάέόίύώήΆΈΌΊΎΏΉϋ]+$/);
} //end of validName

//accepts whitespaces between words [^-\s], all letters from english and greek alphabet, greek letters with tone, commas, full stop, hyphen, apostrophos and exclamation mark
function validMessage(input) {
  return input.match(
    /^[^-\s][a-zA-ZΑ-Ωα-ω0-9 άέόίύώήΆΈΌΊΎΏΉϋ'΄\n.,!-]{0,150}$/
  );
} //end of validMessage

//close alert box
const alertCloseButton = document.querySelector(".close_alert_button");
alertCloseButton.addEventListener("click", (e) => {
  alertBoxContainer.style.display = "none";
  body.style.overflow = "auto";
});

const alertBoxContainer = document.querySelector(".alert_box-container");
const body = document.querySelector("body");

//on Esc key down close alert box
body.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    alertBoxContainer.style.display = "none";
    body.style.overflow = "auto";
  }
});
