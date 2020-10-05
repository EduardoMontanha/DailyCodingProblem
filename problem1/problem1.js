const form = document.getElementById("form");
const listInput = document.getElementById("list");
const numInput = document.getElementById("num");
const outputInput = document.getElementById("output");


form.onsubmit = event => {
    event.preventDefault();

    //Clear previous results
    outputInput.value = "";

    //Get values
    let list = listInput.value.replace(/\s+/gi, "").split(",");
    let number = parseInt(numInput.value);

    //Transform text to number
    list = list.map(num => parseInt(num));

    for(let i = 0; i < list.length; i++) {
        for(let j = 0; j < list.length; j++) {
            if (j !== i) {
                if (list[i] + list[j] === number) {
                    outputInput.value = "TRUE";
                    return;
                } else {
                    outputInput.value = "FALSE";
                }
            }
        }
    }

}