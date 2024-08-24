const button1 = document.getElementById("button1");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const input1 = document.getElementById("input1");
const output3 = document.getElementById("output3");
const input2 = document.getElementById("input2");
const output4 = document.getElementById("output4");


function clickEvent() {
    output1.textContent = "You clicked!";  
}

function hoverEvent() {
    output2.textContent = "You hovered!";  
}

function keydownEvent(event) {
    output3.textContent = `You pressed ${event.key}!`;  
}

function changeEvent(event) {
    output4.textContent = `Value changed to ${input2.value}!`;  
}



