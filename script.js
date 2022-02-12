function getInputValue(input){
const inputField = document.getElementById(input);
const inputValue = inputField.value;
const inputAmount = parseFloat(inputValue);
inputField.value = '';
return inputAmount;    
}

function updateTotalField(totalField, newValue){
    const currentAmount = document.getElementById(totalField);
    const currentAmountText = currentAmount.innerText;    
    const updateAmount = parseFloat(currentAmountText) + newValue;
    currentAmount.innerText = updateAmount;
}

function getCurrentBalance(){
    const currentBalance = document.getElementById('total-balance');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    return currentBalanceAmount;
}

function updateBalance(newValue, isAdd){ 
    const currentBalance = document.getElementById('total-balance');
    const currentBalanceAmount = getCurrentBalance();
    if(isAdd == true){
        currentBalance.innerText = currentBalanceAmount + newValue;
    }
    else {
        currentBalance.innerText = currentBalanceAmount - newValue;
    }
}

// deposit money 
document.getElementById('deposit-btn').addEventListener('click', function(){
const depositValue = getInputValue('deposit-input');
 if (depositValue > 0){                                 //validation
    updateTotalField('total-deposit', depositValue);
    updateBalance(depositValue, true);
 }
});

// withdraw money 
document.getElementById('withdraw-btn').addEventListener('click', function(){
const withdrawValue = getInputValue('withdraw-input');
const myBalance = getCurrentBalance();
if(withdrawValue > 0 && withdrawValue < myBalance){
updateTotalField('total-withdraw', withdrawValue);
updateBalance(withdrawValue, false);
}
});