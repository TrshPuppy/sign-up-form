//Script validates passwords:
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submitButton = document.querySelector("button");
const errorText = document.querySelector(".error-text");

submitButton.addEventListener("click", () => {
  checkPassword(password, confirmPassword);
});

function checkPassword(pass1, pass2) {
  if (pass1.value === pass2.value) {
    pass2.classList.remove("invalid");
    pass2.classList.add("valid");
    submitButton.type = "submit";
  } else {
    pass2.classList.remove("valid");
    pass2.classList.add("invalid");
    submitButton.type = "button";
    errorText.removeAttribute("hidden");
  }
}
