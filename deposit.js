

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount= getImputFieldValue('deposit-field');
    const previousDepositTotal= getTextValue('deposit-total');
    const newDepositTotal= newDepositAmount+previousDepositTotal;
    
    setElementById('deposit-total', newDepositTotal);

    const previousBalanceTotal= getTextValue('balance-total');
    const newBalanceTotal= previousBalanceTotal+newDepositTotal;

    setElementById('balance-total',newBalanceTotal);

})