const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardExpMonth = document.getElementById("exp-month");
const cardExpYear = document.getElementById("exp-year");
const cardCvc = document.getElementById("cvc");

const inputName = document.querySelector("#input-name");
const inputNumber = document.querySelector("#input-number");
const inputExpMonth = document.querySelector("#input-exp-month");
const inputExpYear = document.querySelector("#input-exp-year");
const inputCvc = document.querySelector("#cvc-number");

const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
const confirmButton = document.querySelector(".confirm-button");

const complete = document.querySelector(".complete");
const continueButton = document.querySelector("#continue-button");

inputName.oninput = () => {
  cardName.innerText = inputName.value;
};

inputNumber.oninput = () => {
  cardNumber.innerHTML = inputNumber.value;
};

confirmButton.onclick = (e) => {
  e.preventDefault();

  form.style.display = "none";
  complete.style.display = "flex";
};

continueButton.onclick = () => {
  form.style.display = "flex";
  complete.style.display = "none";
};
