const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardExpDate = document.getElementById("card-exp-date");
const cardCvc = document.getElementById("cvc");

const inputName = document.querySelector("#input-name");
const inputNumber = document.querySelector("#input-number");
const inputExpMonth = document.querySelector("#input-exp-month");
const inputExpYear = document.querySelector("#input-exp-year");
const inputCvc = document.querySelector("#cvc-number");

inputName.oninput = () => {
  cardName.innerText = inputName.value;
};

inputNumber.oninput = () => {
  cardNumber.innerText = inputNumber.value;
};
