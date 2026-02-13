// First, get the counter element
let counterElement = document.getElementById("counter");

// Keep track of the counter value
let counter = 0;

// Function to increase the counter
function tickUp() {
counter++; // increment
counterElement.textContent = counter; // update the HTML
}

// Function to decrease the counter
function tickDown() {
counter--; // decrement
counterElement.textContent = counter; // update the HTML
}

// Simple for loop
function runForLoop() {
    let result1Element = document.getElementById("forLoopResult");

    // Start with empty string
    let output = "";

    // Loop from 0 up to counter include 0
    for (let i = 0; i <= counter; i++) {
        output += i + " ";  // Add the number and a space
    }

    result1Element.textContent = output;  // update the HTML
}

// Repetition with Condition
 function showOddNumbers() {
    let result2Element = document.getElementById("oddNumberResult");

    // Start with empty string
    let output = "";

    // For loop to destermine if number is odd
    for (let i = 1; i <= counter; i++){
        if (i % 2 !== 0){
            output += i + " ";
        }
    }

    result2Element.textContent = output; // update the HTML
} 

// Every Multiple of 5 is printed in reverse order
function addMultiplesToArray() {
    let multiplesArray = [];

    // For loop to count down to zero
    for( let i = counter; i >=0; i--){
        if (i % 5 === 0 && i !== 0){
            multiplesArray.push(i);
        }
    }
    console.log(multiplesArray); // prints the array in the console
}

function printCarObject() {

    // Get values from input
    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;

    // Create car object
    let car = {
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(car); // prints car object in console
}

// Loads the data from the car objects in the footer into the form above
function loadCar(carNumber) {
    if (carNumber === 1) {
        document.getElementById("carType").value = carObject1.cType;
        document.getElementById("carMPG").value = carObject1.cMPG;
        document.getElementById("carColor").value = carObject1.cColor;
    } else if (carNumber === 2) {
        document.getElementById("carType").value = carObject2.cType;
        document.getElementById("carMPG").value = carObject2.cMPG;
        document.getElementById("carColor").value = carObject2.cColor;
    } else if (carNumber === 3) {
        document.getElementById("carType").value = carObject3.cType;
        document.getElementById("carMPG").value = carObject3.cMPG;
        document.getElementById("carColor").value = carObject3.cColor;
    }
}

// Changes the color of the paragraph when the button is clicked
function changeColor(colorNumber) {

    // Get the paragraph element
    let paragraph = document.getElementById("styleParagraph");

    // Change the color based on button clicked
    if (colorNumber === 1) {
        paragraph.style.color = "red";
    } else if (colorNumber === 2) {
        paragraph.style.color = "green";
    } else if (colorNumber === 3) {
        paragraph.style.color = "blue";
    } 
}