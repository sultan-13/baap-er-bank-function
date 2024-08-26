document.getElementById('withdraw-btn').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldById('withdraw-field');
    if(isNaN(newWithdrawAmount)){
        alert('please enter a valid amount');
        return;
    }
    const previousWithdrawTotal = getTextElementById('withdraw-total');
    const previousBalanceTotal = getTextElementById('balance-total');
    if(previousBalanceTotal<newWithdrawAmount){
        alert('withdraw amount is too high');
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementById('withdraw-total',currentWithdrawTotal);
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementById('balance-total',currentBalanceTotal);
})