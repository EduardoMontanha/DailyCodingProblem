window.onload = () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(elem => {
        
        const header = elem.querySelector('.card-header');
        const body = elem.querySelector('.card-body');
        const listItems = body.querySelectorAll('li');

        let solvedAmount = 0;
        let incompatibleAmount = 0; //Problems that can't be handle by JS

        listItems.forEach(item => {
            if (item.classList.contains('solved')) {
                solvedAmount++;
            } else if (item.classList.contains('incompatible')) {
                incompatibleAmount++;
            }
        })

        header.querySelector('h4').innerText = `${solvedAmount}/${listItems.length - incompatibleAmount}`;
    });
}