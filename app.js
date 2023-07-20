// app.js
import greet from './greet.js';

document.addEventListener('DOMContentLoaded', () => {
  const greetButton = document.getElementById('greetButton');
  const nameInput = document.getElementById('nameInput');
  const resultDiv = document.getElementById('result');

  greetButton.addEventListener('click', () => {
    const name = nameInput.value;
    const greeting = greet(name);
    resultDiv.textContent = greeting;
  });
});

// app.js
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard.js";

// Parse the "Standard" font
figlet.parseFont("Standard", standard);

// Function to render ASCII art text using figlet.js
function renderAsciiArt(text) {
  figlet.text(text, function (error, data) {
    if (error) {
      console.error('Error rendering ASCII art:', error);
    } else {
      document.getElementById('ascii-art').innerText = data;
    }
  });
}

// Example usage:
const myText = 'Hello Katleho you are the master of Figlet!';
renderAsciiArt(myText);

