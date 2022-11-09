const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
console.log(emailError);

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Please enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters.`;
  }

  emailError.className = "error active";
}

// //Script validates passwords:
// const password = document.querySelector("#password");
// const confirmPassword = document.querySelector("#confirm-password");
// const submitButton = document.querySelector("button");
// const errorText = document.querySelector(".error-text");

// submitButton.addEventListener("click", () => {
//   checkPassword(password, confirmPassword);
// });

// function checkPassword(pass1, pass2) {
//   if (pass1.value === pass2.value) {
//     pass2.classList.remove("invalid");
//     pass2.classList.add("valid");
//     submitButton.type = "submit";
//   } else {
//     pass2.classList.remove("valid");
//     pass2.classList.add("invalid");
//     submitButton.type = "button";
//     errorText.removeAttribute("hidden");
//   }
// }
