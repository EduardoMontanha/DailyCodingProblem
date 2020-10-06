const form = document.getElementById("form");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const output1 = document.getElementById("output1");
const output2= document.getElementById("output2");

const cons = (a, b) => {
    return new Array(a, b);
}

const car = (arr) => {
    return arr[0];
}

const cdr = (arr) => {
    return arr[1];
}

form.onsubmit = event => {
    event.preventDefault();

    //Clear previous results
    output1.value = "";
    output2.value = "";

    const first = num1.value;
    const last = num2.value;

    const pair = cons(first, last);

    output1.value = car(pair);
    output2.value = cdr(pair);
}