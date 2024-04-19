
document.getElementById('deposite-btn').addEventListener('click',function(){

    const depoInputValue = getInputFieldById('input-deposite');
    const textFieldValue = getTextFieldById('deposite-id');

    const totalDepoValue = textFieldValue + depoInputValue;
    getElementTotal('deposite-id',totalDepoValue);
//for balance
    const getBalanceTotal = getTextFieldById('balance-id');
    const newBalanceTotal = getBalanceTotal + depoInputValue;

    getElementTotal('balance-id',newBalanceTotal);

})