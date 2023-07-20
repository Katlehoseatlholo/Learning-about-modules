import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard.js";

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

figlet.text(
  "test",
  {
    font: "Standard",
  },
  function (err, data) {
    console.log(data);
  }
);
figlet.text(
    "Boo!",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );

  console.log(
    figlet.textSync("Boo!", {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );

  figlet.metadata("Standard", function (err, options, headerComment) {
    if (err) {
      console.log("something went wrong...");
      console.dir(err);
      return;
    }
    console.dir(options);
    console.log(headerComment);
  });

  figlet.fonts(function (err, fonts) {
    if (err) {
      console.log("something went wrong...");
      console.dir(err);
      return;
    }
    console.dir(fonts);
  });
  console.log(figlet.fontsSync());

  const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "myfont.flf"), "utf8");
figlet.parseFont("myfont", data);
/////////////////////////////////

