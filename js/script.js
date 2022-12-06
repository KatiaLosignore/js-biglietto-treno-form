console.log('JS OK');



// Prendere l'elemento dal DOM
const button = document.getElementById('target');
console.log(button);

const nameInput = document.getElementById('name');
console.log(nameInput);

const targetKm = document.getElementById('kilometer');
console.log(targetKm);

const ageSelect = document.getElementById('age');

const ticket = document.getElementById('ticket');
console.log(ticket);

const namePassenger = document.getElementById('name-passenger');
console.log(namePassenger);

const ticketTypeInput = document.getElementById('ticket-type');
console.log(ticketTypeInput);




// Inserire i dati calcolati


button.addEventListener("click", function () {


    // Prendere il value dell'input name
    const nameValue = nameInput.value;
    console.log(nameValue);

    // Prendere il value dell'input kilometer
    const kmValue = targetKm.value;
    console.log(kmValue);

    // Prendere il valore della select age
    const selectValue = ageSelect.value;
    console.log(selectValue);

    let isValid = true;
    // Validazione campi
    if (isNaN(kmValue) || kmValue <= 0 || !nameValue || !selectValue) {
        isValid = false;
    }

    if (isValid) {
        // Totale prezzo del biglietto standard
        let ticketPrice = kmValue * 0.21;


        let finalPrice = ticketPrice;
        let ticketType = 'Standard ticket';


        if (selectValue === 'underage') {
            finalPrice = ((ticketPrice / 100) * 80);
            console.log('sconto minorennni applicato, prezzo finale = ' + finalPrice);
            ticketType = 'Ticket Scontato al 20%';
        } else if (selectValue === 'over') {
            finalPrice = ((ticketPrice / 100) * 60);
            ticketType = 'Ticket Scontato al 40%';
            console.log('sconto over65 applicato, prezzo finale = ' + finalPrice);
        }


        finalPrice = finalPrice.toFixed(2) + '€';

        // Inserire i valori nell'HTML

        ticket.innerText = "Il prezzo del viaggio è " + finalPrice;
        namePassenger.innerText = "Nome: " + nameValue;
        ticketTypeInput.innerText = "Il tuo biglietto è " + ticketType;

    } else {
        alert('I campi non sono corretti');
    }



});





