// Include the following in the JavaScript file:

// Create a function which will accept these amount entered by users as a parameter.
// Then write the logic to calculate the total amount spent on the grocery purchase.
// Call this function in such a way so that after clicking on the button, it shows the total amount for the grocery purchase.

let grocery1;
let grocery2;
let grocery3;

function calculateTotal() {
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);
    let total = grocery1 + grocery2 + grocery3;

    document.getElementById('result').innerText = `Your total is: ${total}`;
}