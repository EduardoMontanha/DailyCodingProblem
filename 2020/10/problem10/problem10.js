const form = document.getElementById("form");
const titleInput = document.getElementById("title");
const timeInput = document.getElementById("time");

const scheduler = (title, time) => {
    try {
        setTimeout(() => {
            alert(title);
        }, time * 1000);

    } catch (err) {
        console.error(err);
    }
}

form.onsubmit = event => {
    event.preventDefault();

    scheduler(titleInput.value, timeInput.value);
}