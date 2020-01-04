//DOM elements
const resultEl= document.getElementById('result');
const lengthEl= document.getElementById('length');
const uppercaseEl= document.getElementById('uppercase');
const lowercaseEl= document.getElementById('lowercase');
const numbersEl= document.getElementById('numbers');
const symbolsEl= document.getElementById('symbols');
const generateEl= document.getElementById('generate');
const clipboardEl= document.getElementById('clipboard');


generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSymbols = symbolsEl.checked; 

    const settings = [
        {value: 'abcdefghijklmnopqrstuvwxyz', isChecked: hasLower},
        {value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', isChecked: hasUpper},
        {value: '!@#$%^&*(){}[]=<>,./?', isChecked: hasNumbers},
        {value: '0123456789', isChecked: hasSymbols}
    ].filter((item) => {return item.isChecked === true});

    let password = []

    for (i=0; i<length; i++) {
        const randomCategory = settings[Math.floor(Math.random() * settings.length)].value
        const randomItem = randomCategory[Math.floor(Math.random() * randomCategory.length)]
        password.push(randomItem)
    }

    result.innerText = password.join('')
})

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard')
})