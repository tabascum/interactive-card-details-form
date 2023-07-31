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
    errorInput.style.display = "none";
  } else {
    errorInput.style.display = "block";
    errorInput.innerText = "Wrong format, numbers only";
  }
};

inputExpMonth.oninput = () => {
  const month = inputExpMonth.value;
  const isValidMonth = !isNaN(month) && month > 0 && month <= 12;

  if (!isValidMonth) {
    inputExpMonth.style.border = ".1rem solid hsl(0, 100%, 66%)";
    document.querySelector(".date-container .error-label").textContent =
      "Must be between 1 and 12";
    document.querySelector(".date-container .error-label").style.display =
      "block";
  }

  cardExpMonth.innerText = inputExpMonth.value;
};

inputExpYear.oninput = () => {
  cardExpYear.innerText = inputExpYear.value;

  const year = inputExpYear.value;
  const actualYear = new Date().getFullYear() % 100;

  const isValidYear = !isNaN(year) && year >= actualYear;

  if (!isValidYear) {
    inputExpYear.style.border = ".1rem solid hsl(0, 100%, 66%)";
  }
};

inputCvc.oninput = () => {
  cardCvc.innerText = inputCvc.value;
};

confirmButton.onclick = (e) => {
  e.preventDefault();

  if (
    !inputName.value ||
    !inputNumber.value ||
    !inputExpMonth.value ||
    !inputExpYear.value ||
    !inputCvc.value
  ) {
    errorLabel.forEach((error) => {
      error.style.display = "block";
    });
    complete.style.display = "none";
    form.style.display = "flex";
  } else {
    errorLabel.forEach((error) => {
      error.style.display = "none";
    });
    complete.style.display = "flex";
    form.style.display = "none";
  }
};

continueButton.onclick = () => {
  inputs.forEach((input) => {
    input.value = "";
  });

  complete.style.display = "none";
  form.style.display = "flex";
};
