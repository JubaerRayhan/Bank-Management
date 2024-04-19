document.getElementById('withdraw-btn').addEventListener('click',function(){
   const inputField = document.getElementById('input-withdraw');
   const inputStringValue = inputField.value;
   const inputNumberValue = parseFloat(inputStringValue);

   inputField.value = '';

   const withdrawField = document.getElementById('withdraw-id');
   const withdrawStringValue = withdrawField.innerText;
   const withdrawNumberValue = parseFloat(withdrawStringValue);
   
   const totalWithdraw = withdrawNumberValue + inputNumberValue;
   withdrawField.innerText = totalWithdraw;

   //Balance Section
   const balanceField = document.getElementById('balance-id');
   const balanceStringValue = balanceField.innerText;
   const balanceNumberValue = parseFloat(balanceStringValue);

   const totalBalance = balanceNumberValue - inputNumberValue;
   balanceField.innerText = totalBalance;
})