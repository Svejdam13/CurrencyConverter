//Vars
const curOne = document.getElementById('curr-one'); 
const amtOne = document.getElementById('amount-one');
const curTwo = document.getElementById('curr-two');
const amtTwo = document.getElementById('amount-two');
const rateCu = document.getElementById('rate');
const swapIc = document.getElementById('btn-swap');
const infoCu = document.getElementById('result-info');
const lasCur = document.getElementById('only-cur')
const conBtn = document.getElementById('btn-con');

// Function
function calculate(){
  const cuOn = curOne.value;
  const cuTw = curTwo.value;
  fetch(`https://api.exchangeratesapi.io/latest?base=${cuOn}`)  // base is USD
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      const rate = data.rates[cuTw];
      //console.log(rate);
      infoCu.innerText = `${amtOne.value} ${cuOn} =`;
      rateCu.innerText = `1 ${cuOn} = ${rate} ${cuTw}`;
      amtTwo.value = (amtOne.value * rate).toFixed(2);
      lasCur.innerText = `${amtTwo.value} ${curTwo.value}`;
    });
}
function finalResult() {
  calculate();
}  
//Event listeners
conBtn.addEventListener('click', finalResult);
swapIc.addEventListener('click', () => {
  const temp = curOne.value;
  curOne.value = curTwo.value;
  curTwo.value = temp;
  calculate()
});

// Call the function
finalResult();




