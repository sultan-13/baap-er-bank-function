function getInputFieldById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementvalue = parseFloat(element.innerText);
    return elementvalue;
}

function setTextElementById(elementId,newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}