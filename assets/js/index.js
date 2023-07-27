const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");
const cardExpMonth = document.getElementById("exp-month");
const cardExpYear = document.getElementById("exp-year");
const cardCvc = document.getElementById("cvc");

const inputName = document.querySelector("#input-name");
const inputNumber = document.querySelector("#input-number");
const inputExpMonth = document.querySelector("#input-exp-month");
const inputExpYear = document.querySelector("#input-exp-year");
const inputCvc = document.querySelector("#cvc-number");

const inputs = document.querySelectorAll(`input[type="text"]`);
const form = document.querySelector("form");
const confirmButton = document.querySelector(".confirm-button");

const complete = document.querySelector(".complete");
const continueButton = document.querySelector("#continue-button");

inputName.oninput = () => {
  cardName.innerText = inputName.value;
};

inputNumber.oninput = () => {
  const numberRegexp = /^\d+$/;

  if (inputNumber.value.match(numberRegexp)) {
    cardNumber.innerText = inputNumber.value;
    document.getElementById("format-error").style.display = "none";
  } else {
    document.getElementById("format-error").style.display = "flex";
  }
};

inputExpMonth.oninput = () => {
  cardExpMonth.innerText = inputExpMonth.value;
};

inputExpYear.oninput = () => {
  cardExpYear.innerText = inputExpYear.value;
};

inputCvc.oninput = () => {
  cardCvc.innerText = inputCvc.value;
};

document.querySelectorAll(".error-label").forEach((label) => {
  label.style.display = "block";
  inputs.forEach((input) => {
    if (input.value === "") {
      input.style.border = ".1rem solid hsl(0, 100%, 66%)";
    }
  });
});

confirmButton.onclick = (e) => {
  e.preventDefault();

  form.style.display = "none";
  complete.style.display = "flex";
};

continueButton.onclick = () => {
  form.style.display = "flex";
  complete.style.display = "none";
};
