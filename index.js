
function healthCal() {
    let weight = +document.getElementById('weight').value;
    let height = +document.getElementById('height').value;
    let age = +document.getElementById('age').value;
    let result = 0;
    
    if (document.getElementById('male').checked) {
            result = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else {
            result = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }

    return result.toFixed(2);
}

function healthDisplay () {
    document.getElementById("h__result").innerHTML = healthCal();
}

function loanCal() {
    let amount = document.getElementById('js-amount').value;
    let termYears = document.getElementById('js-termYears').value;
    let interestRate = document.getElementById('js-InterestRate').value;

    // return (`${amount} + ${termYears} + ${interestRate}`);

    let result = ((((amount * interestRate) / 100) * 31) / (termYears * 366));
    return result = result.toFixed(2);
};

loanDisplay = () =>
    document.getElementById('l__result').innerText = loanCal();

//! GPA 

function gpaCal() {
    let math = +document.getElementById('js-math').value;
    let thai = +document.getElementById('js-thai').value;
    let english = +document.getElementById('js-english').value;
    let history = +document.getElementById('js-history').value;
    let sociology = +document.getElementById('js-sociology').value;
    let health = +document.getElementById('js-health').value;

    let result = ((math + thai + english + history + sociology + health) / 6);
    return result = result.toFixed(2);
}

gpaDisplay = () =>
    document.getElementById('e__result').innerText = gpaCal();

function gpaReset() {
    document.getElementById('e__result').innerText = 0;

    document.getElementById('js-math').value = null;
    document.getElementById('js-thai').value = null;
    document.getElementById('js-english').value = null;
    document.getElementById('js-history').value = null;
    document.getElementById('js-sociology').value = null;
    document.getElementById('js-health').value = null;
}