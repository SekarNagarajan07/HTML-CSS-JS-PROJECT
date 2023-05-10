const buttonE1 = document.querySelectorAll("button");

const inputFieldE1 = document.getElementById("result");

for (let i = 0; i < buttonE1.length; i++) {
  buttonE1[i].addEventListener("click", () => {
    const buttonValue = buttonE1[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldE1.value = "";
}

function calculateResult() {
  inputFieldE1.value = eval(inputFieldE1.value);
}

function appendValue(buttonValue) {
  inputFieldE1.value += buttonValue;
}
