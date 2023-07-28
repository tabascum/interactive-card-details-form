const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");
const cardExpMonth = document.getElementById("exp-month");
const cardExpYear = document.getElementById("exp-year");
const cardCvc = document.getElementById("cvc");

const errorLabel = document.querySelectorAll(".error-label");
const errorInput = document.getElementById("format-error");

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

function splitNumber(arr, chunkSize) {
  return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
    arr.slice(index * chunkSize, index * chunkSize + chunkSize)
  );
}

inputNumber.oninput = () => {
  const numberRegexp = /^\d+$/;
  const arrayNumber = inputNumber.value.replace(/\s/g, "");
  const chunkSize = 4;

  const newNumbers = splitNumber(arrayNumber, chunkSize);

  if (arrayNumber.match(numberRegexp)) {
    cardNumber.innerText = newNumbers.join(" ");
    errorInput.style.display = "";
  } else {
    cardNumber.innerText;
    errorInput.style.display = "block";
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

confirmButton.onclick = (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    if (!input.value) {
      input.style.border = ".1rem solid hsl(0, 100%, 66%)";
      errorLabel.forEach((error) => {
        error.style.display = "block";
      });
      complete.style.display = "none";
      form.style.display = "flex";
    } else {
      input.style.border = "";
      complete.style.display = "flex";
      form.style.display = "none";
    }
  });
};

continueButton.onclick = () => {
  complete.style.display = "none";
  form.style.display = "flex";
};
