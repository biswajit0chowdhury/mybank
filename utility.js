function getImputFieldValue(inputField) {
    const inputValue = document.getElementById(inputField);
    const inputFieldString = inputValue.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputValue.value='';
    return inputFieldValue;
}

function getTextValue(textField) {
    const textFieldValue = document.getElementById(textField);
    const textFieldString = textFieldValue.innerText;
    const textValue = parseFloat(textFieldString);
    return textValue;
}


function setElementById(elementId, newValue){
    const textElement= document.getElementById(elementId);
    textElement.innerText= newValue;
    
}

