const form = document.getElementById("form");
const listInput = document.getElementById("list");
const outputInput = document.getElementById("output");


form.onsubmit = event => {
    event.preventDefault();

    //Get values
    let list = listInput.value.replace(/\s+/gi, "").split(",");

    //Transform text to number
    list = list.map(num => parseInt(num));

    let outputList = [];

    for (let i = 0; i < list.length; i++) {
        let aux = 0;

        for (let j = 0; j < list.length; j++) {
            if (j !== i) {
                if (aux === 0) {
                    aux = list[j];
                } else {
                    aux *= list[j];
                }
            }
        }

        outputList.push(aux);
    }

    outputInput.value = outputList;
}