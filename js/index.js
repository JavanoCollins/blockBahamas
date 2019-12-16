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

OOP

Person = (name, dob) => {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculate = () => {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

const jd = new Person("Javano")