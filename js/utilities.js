function getInputFieldById (InputId){
    const inputBtn = document.getElementById(InputId);
    const inputValueString = inputBtn.value;
    const inputValueNumber = parseFloat(inputValueString);
    inputBtn.value = '';
    return inputValueNumber;

}
function getTextFieldById (TextAmout){
    const textField = document.getElementById(TextAmout);
    const textValueString = textField.innerText;
    const textValueNumber = parseFloat(textValueString);
    return textValueNumber;
}
function getElementTotal(TextAmout,newValue){
    const getElementValue = document.getElementById(TextAmout,newValue);
    getElementValue.innerText = newValue;
}