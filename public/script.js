/*
 to respond to the submit button
*/
function solve() {
    const form = document.getElementById('input_form');
    const formData = new FormData(form);

    const name = formData.get('name');
    const gender = formData.get('gender');
    const guests = [];

    // Collect guest names
    for (let entry of formData.entries()) {
        if (entry[0].startsWith("guest")) {
            guests.push(entry[1]);
        }
    }

    // Validate inputs
    if (!name || !gender || guests.length === 0) {
        alert("Please enter all required details: celebrant name, gender, and guest names.");
        return;
    }

    // Define songs
    const happyBirthday = `Happy birthday to you Happy birthday to you Happy birthday dear ${name} Happy birthday to you`.split(" ");
    const goodFellow = `For ${gender === "male" ? "he's" : "she's"} a jolly good fellow, For ${gender === "male" ? "he's" : "she's"} a jolly good fellow, For ${gender === "male" ? "he's" : "she's"} a jolly good fellow, which nobody can deny!`.split(" ");

    // Assign each word of Happy Birthday to guests in order
    let outputText = "<h2>Happy Birthday Song</h2>";
    for (let i = 0; i < happyBirthday.length; i++) {
        outputText += `${guests[i % guests.length]}: ${happyBirthday[i]}<br>`;
    }

    // Assign each word of Good Fellow song
    outputText += "<h2>Good Fellow Song</h2>";
    for (let i = 0; i < goodFellow.length; i++) {
        outputText += `${guests[i % guests.length]}: ${goodFellow[i]}<br>`;
    }

    // Display the song output
    document.getElementById('output').innerHTML = outputText;
}

/*
 A quick data dump on Output div to show users input on the browser.
*/
function printFormData() {
    const form = document.getElementById('input_form');
    const formData = new FormData(form);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2> Output <h2>';
    for (let [key, value] of formData.entries()){
      outputDiv.innerHTML += `${key}: ${value} <br>`;
    }
    const myData = Object.fromEntries(formData.entries());
    console.log(myData)
    console.log(formData.entries())
}
