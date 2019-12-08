const login = document.querySelector("#login-form");
const loginButton = document.querySelector(".loginBtn");
// const bounceOption = document.querySelector('');

login.style.display = "none";

loginButton.addEventListener("click", () => {
  if (login.style.display == "none") {
    login.style.display = "flex";
  } else {
    login.style.display = "none";
  }
});
