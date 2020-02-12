function plus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 + num2;
    document.getElementById('numberisEqualTo').innerHTML = result;
}

function minus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 - num2;
    document.getElementById('numberisEqualTo').innerHTML = result;
}

function multiply() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 * num2;
    document.getElementById('numberisEqualTo').innerHTML = result;
}

function share() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 / num2;
    document.getElementById('numberisEqualTo').innerHTML = result;
}

function ac() {
let inputs = document.querySelectorAll('input[type=text]');
for (let i = 0;  i < inputs.length; i++) {
  inputs[i].value = '';
    }
};

// function ac() {
// let p = document.querySelectorAll('numberisEqualTo');
// for (let i = 0;  i < p.length; i++) {
//   inputs[i].value = '';
//     }
// };