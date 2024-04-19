document.getElementById('deposite-btn').addEventListener('click',function(){
    const inputField = document.getElementById('input-deposite');
    const inputStringValue = inputField.value;
    const inputNumberValue = parseFloat(inputStringValue);

    inputField.value='';
    
    const depositeField = document.getElementById('deposite-id');
    const depositeStringValue = depositeField.innerText;
    const depositeNumberValue = parseFloat(depositeStringValue);

    const setDepositeAmount = depositeNumberValue + inputNumberValue;
    depositeField.innerText = setDepositeAmount;

    //Balance Section
    const balanceField = document.getElementById('balance-id');
    const balanceStringValue = balanceField.innerText;
    const balanceNumberValue = parseFloat(balanceStringValue);

    const setBalanceAmount = balanceNumberValue + inputNumberValue
    balanceField.innerText = setBalanceAmount;
})