
function healthCalculators() {
    let weight = +document.getElementById('weight').value;
    let height = +document.getElementById('height').value;
    let age = +document.getElementById('age').value;
    document.getElementById("h__result").innerHTML = weight + height + age;
}


function loanCal() {
    let amount = document.getElementById('js-amount').value;
    let termYears = document.getElementById('js-termYears').value;
    let interestRate = document.getElementById('js-InterestRate').value;

    // return (`${amount} + ${termYears} + ${interestRate}`);

    let result = ((((amount * interestRate)/100) * 31) / (termYears * 366));

    return result = result.toFixed(2);
};

loanDisplay = () => 
document.getElementById('l__result').innerText = loanCal();
