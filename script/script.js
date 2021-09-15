'use strict';
const currencyOneE1=document.getElementById('currency-one');
const amountOneE1=document.getElementById('amount-one');
const currencyTwoE1=document.getElementById('currency-two');
const amountTwoE1= document.getElementById('amount-two');

//function
const calculate =function(){

const currencyOne=currencyOneE1.value;
const currencyTwo=currencyTwoE1.value;

fetch(`https://api.exchangerate-api.com/v6/latest/${currencyOne}`)
  .then((res) => res.json())
  .then((data) => { 
    const rate= data.rates[currencyTwo];
  
    amountTwoE1.value = (amountOneE1.value * rate);
  });
}
//Eventlistenerns
currencyOneE1.addEventListener('change',calculate);

amountOneE1.addEventListener('input',calculate);

currencyTwoE1.addEventListener('change',calculate);

amountTwoE1.addEventListener('input',calculate);

calculate();