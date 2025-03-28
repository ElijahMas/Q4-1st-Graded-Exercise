/*
  To respond to the submit button
*/
function solve() {
    const form = document.getElementById('input_form');
    const formData = new FormData(form);

    const name = formData.get('name');
    const gender = formData.get('gender');

    if (!name || !gender) {
        alert("Please enter your name and select a gender!");
        return;
    }

    let pronoun = (gender === 'male') ? "he's" : "she's";

    const jollyGoodFellow = `For ${pronoun} a jolly good fellow. For ${pronoun} a jolly good fellow. For ${pronoun} a jolly good fellow, which nobody can deny!`;
    const happyBirthday = `Happy birthday to you. Happy birthday to you. Happy birthday dear ${name}. Happy birthday to you!`;

    // Display output on the webpage
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h2>Celebratory Songs</h2>
                           <p>${jollyGoodFellow}</p>
                           <p>${happyBirthday}</p>`;
}

// Fix the printFormData function (template literals corrected)
function printFormData() {
    const form = document.getElementById('input_form');
    const formData = new FormData(form);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Output</h2>';
    for (let [key, value] of formData.entries()) {
        outputDiv.innerHTML += `${key}: ${value} <br>`;
    }
    const myData = Object.fromEntries(formData.entries());
    console.log(myData);
    console.log(formData.entries());
}
