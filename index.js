window.onload = () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(elem => {
        
        const header = elem.querySelector('.card-header');
        const body = elem.querySelector('.card-body');
        const listItems = body.querySelectorAll('li');

        let solvedAmount = 0;

        listItems.forEach(item => {
            if (item.classList.contains('solved')) {
                solvedAmount++;
            }
        })

        header.querySelector('h4').innerText = `${solvedAmount}/${listItems.length}`;
    });
}