document.getElementById('deposit-btn').addEventListener('click',function(){
    const newDepositAmount = getInputFieldById('deposit-field');
    if(isNaN(newDepositAmount)){
        alert('please enter a valid amount');
        return;
    }
    const previousDepositTotal = getTextElementById('deposit-total');
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementById('deposit-total',currentDepositTotal);
    const previousBalanceTotal = getTextElementById('balance-total');
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementById('balance-total',currentBalanceTotal);
})

