
//Phone Minus click
document.getElementById('phoneMinus').addEventListener('click', function () {
    console.log('clicked phone minus in phone');
    const phoneInput = document.getElementById('phoneInput').value;
    const valueInNum = parseInt(phoneInput);

    const phonePrice=document.getElementById('phonePrice').innerText;
    const phonePriceInNum=parseInt(phonePrice);

    let subTotal=document.getElementById('subTotal').innerText;
    subTotal = subTotal.split(',').join('');
    let subTotalInNum=parseInt(subTotal);
    

    if (valueInNum >= 1) {
        document.getElementById('phoneInput').value = valueInNum-1;
        document.getElementById('phonePrice').innerText=phonePriceInNum-1219;
        document.getElementById('subTotal').innerText=subTotalInNum - 1219;
        
    }

});

//Phone plus click
document.getElementById('phonePlus').addEventListener('click', function () {
    console.log('clicked phone plus in phone')
    const phoneInput = document.getElementById('phoneInput').value;
    const valueInNum = parseInt(phoneInput);

    const phonePrice=document.getElementById('phonePrice').innerText;
    const phonePriceInNum=parseInt(phonePrice);

    let subTotal=document.getElementById('subTotal').innerText;
    subTotal = subTotal.split(',').join('');
    let subTotalInNum=parseInt(subTotal);

    if (valueInNum >= 0) {
        document.getElementById('phoneInput').value = valueInNum+1;
        document.getElementById('phonePrice').innerText=phonePriceInNum+1219;
        document.getElementById('subTotal').innerText=subTotalInNum + 1219;
    }
});










//case minus click
document.getElementById('caseMinus').addEventListener('click', function () {
    console.log('clicked case minus in phone')
    const caseInput = document.getElementById('caseInput').value;
    const CaseValueInNum = parseInt(caseInput);

    const casePrice=document.getElementById('casePrice').innerText;
    const casePriceInNum=parseInt(casePrice);

    let subTotal=document.getElementById('subTotal').innerText;
    subTotal = subTotal.split(',').join('');
    let subTotalInNum=parseInt(subTotal);

    if (CaseValueInNum >= 1) {
        document.getElementById('caseInput').value = CaseValueInNum-1;
        document.getElementById('casePrice').innerText=casePriceInNum-59;
        document.getElementById('subTotal').innerText=subTotalInNum -59;
    }
});


//case plus click
document.getElementById('casePlus').addEventListener('click', function () {
    console.log('clicked case plus in phone')
    const caseInput = document.getElementById('caseInput').value;
    const CaseValueInNum = parseInt(caseInput);

    const casePrice=document.getElementById('casePrice').innerText;
    const casePriceInNum=parseInt(casePrice);

    let subTotal=document.getElementById('subTotal').innerText;
    subTotal = subTotal.split(',').join('');
    let subTotalInNum=parseInt(subTotal);

    if (CaseValueInNum >= 0) {
        document.getElementById('caseInput').value = CaseValueInNum+1;
        document.getElementById('casePrice').innerText=casePriceInNum+59;
        document.getElementById('subTotal').innerText=subTotalInNum +59;
    }
});

