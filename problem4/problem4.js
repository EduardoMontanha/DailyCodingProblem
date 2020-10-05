const form = document.getElementById("form");
const listInput = document.getElementById("list");
const outputInput = document.getElementById("output");


form.onsubmit = event => {
    event.preventDefault();

    //Clear previous results
    outputInput.value = "";

    //Get values
    let list = listInput.value.replace(/\s+/gi, "").split(",");

    //Transform text to number
    list = list.map(num => parseInt(num));

    let low = 0;
    let high = 0;

    for (let i = 0; i < list.length; i++) {
        let current = list[i];

        if (i === 0) {
            low = current;
            high = current;
        } else {
            if (current < low) {
                low = current;
            } else if (current > high) {
                high = current;
            }
        }
    }

    for (let i = low; i < high + 2; i++) {
        if (list.indexOf(i) === -1) {
            if (i > 0) {
                outputInput.value = i;
                return;
            }
        }
    }
}