const form = document.getElementById("form");
const msg = document.getElementById("message");
const output = document.getElementById("output");

form.onsubmit = event => {
    event.preventDefault();

    //Clear previous results
    output.value = "";

    const words = msg.value.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        
        const word = words[i];

        for (let j = 0; j < word.length; j++) {

            const letter = word[j];

            if (j + 1 < word.length) {
                if (parseInt(letter) <= 2 && parseInt(word[j + 1]) <= 6) {
                    count++;
                }
            } else {
                count++;
            }
        }
    }

    output.value = count;
}