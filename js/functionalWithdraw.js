document.getElementById('withdraw-btn').addEventListener('click',function(){
    const totalWithdrawAmount = getInputFieldById('input-withdraw');
    const previousWithdrawTotal = getTextFieldById('withdraw-id');

    const newWithdrawAmount = previousWithdrawTotal + totalWithdrawAmount;
    getElementTotal('withdraw-id',newWithdrawAmount);
//for Balance
    const previousBalanceTotal = getTextFieldById('balance-id');
    const newBalanceTotal = previousBalanceTotal - totalWithdrawAmount;

    getElementTotal('balance-id',newBalanceTotal);
})