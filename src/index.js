import "./styles.css";

var dob = document.querySelector(".dob");
var luckyNumber = document.querySelector(".luckyNumber");
var button = document.querySelector("button");
var message = document.querySelector(".message");
// var heading = document.querySelector(".header");
var card = document.querySelector("#app");

function clickHandler() {
  var DOB = dob.value;
  calculateSum(DOB);
}
function calculateSum(DOB) {
  var sum = 0;
  DOB = DOB.replaceAll("-", "");
  for (var i = 0; i < DOB.length; i++) {
    sum = sum + Number(DOB.charAt(i));
  }
  if (luckyNumber.value <= 0) {
    message.innerText = "Lucky Number can't be less than 0";
    return;
  }
  if (sum % luckyNumber.value === 0) {
    message.innerText = "Hurray ! Your Birth Day is Lucky 😍";
    card.style.backgroundColor = "#D1FAE5";
  } else {
    message.innerText = "Oops ! Your Birth Day isn't Lucky😓";
    card.style.backgroundColor = "#F87171";
  }
}

button.addEventListener("click", clickHandler);
