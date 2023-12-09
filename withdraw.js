document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getImputFieldValue('withdraw-field');
    const previousWithdrawTotal= getTextValue('withdraw-total');
    const WithdrawAmount= newWithdrawAmount + previousWithdrawTotal;
    
    setElementById('withdraw-total', WithdrawAmount);

    const previousBalanceTotal= getTextValue('balance-total');
    const newBalanceTotal= previousBalanceTotal - WithdrawAmount;

    setElementById('balance-total',newBalanceTotal);

})