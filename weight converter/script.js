const inputE1 = document.getElementById('input');
const errorE1 = document.getElementById('error');
const resultE1 = document.getElementById('result');
let errorTime;
let resultTime;
function updateResults() {
  if(inputE1.value <=0 ||isNaN(inputE1.value)) {
    errorE1.innerText = "Please enter a valid number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(()=> {
      errorE1.innerText = "";
      inputE1.value = "";
    },2000);
  } else {
    resultE1.innerText=(+inputE1.value/2.2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(()=> {
      errorE1.innerText = "";
      inputE1.value = "";
    },10000);
  }
}

inputE1.addEventListener("input",updateResults)