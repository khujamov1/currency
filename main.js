var accountForm = document.querySelector(".site-form");
var neededMoney = accountForm.querySelector(".site-input");
var selectCurrency = accountForm.querySelector(".site-select")
var text = document.querySelector(".desc");


accountForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var selectCurrencyValue = selectCurrency.value;
    var amountMoney = neededMoney.value * selectCurrencyValue;
    
    text.textContent=`${amountMoney} sum`;
})
