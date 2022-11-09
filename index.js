const form = document.querySelector("form");

const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector("#first-name + span.error");

function showError(inputInstance, inputError) {
  if (inputInstance.validity.valueMissing) {
    inputError.textContent = `"Please enter an ${inputInstance.name}.`;
  } else if (inputInstance.validity.typeMismatch) {
    inputError.textContent = `Please enter a valid ${inputInstance.name}.`;
  } else if (inputInstance.validity.tooShort) {
    inputError.textContent = `${inputInstance.name} should be at least ${inputInstance.minLength} characters.`;
  }

  inputError.className = "error active";
}

// Event Listeners:
firstName.addEventListener("input", (e) => {
  if (firstName.validity.valid) {
    firstNameError.textContent = "";
    firstNameError.className = "error";
  } else {
    showError(firstName, firstNameError);
  }
});

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError(email, emailError);
  }
});

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    showError(email, emailError);
    e.preventDefault();
  } else if (!firstName.validity.valid) {
    showError(firstName, firstNameError);
    e.preventDefault();
  }
});

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
