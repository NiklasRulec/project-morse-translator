// ! ++++++++++ DATEN ++++++++++

let morseAlphabet = [
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "0", morseCode: "-----" },
  { letter: " ", morseCode: "    " },
  { letter: "A", morseCode: ".-" },
  { letter: "B", morseCode: "-..." },
  { letter: "C", morseCode: "-.-." },
  { letter: "D", morseCode: "-.." },
  { letter: "E", morseCode: "." },
  { letter: "F", morseCode: "..-." },
  { letter: "G", morseCode: "--." },
  { letter: "H", morseCode: "...." },
  { letter: "I", morseCode: ".." },
  { letter: "J", morseCode: ".---" },
  { letter: "K", morseCode: "-.-" },
  { letter: "L", morseCode: ".-.." },
  { letter: "M", morseCode: "--" },
  { letter: "N", morseCode: "-." },
  { letter: "O", morseCode: "---" },
  { letter: "P", morseCode: ".--." },
  { letter: "Q", morseCode: "--.-" },
  { letter: "R", morseCode: ".-." },
  { letter: "S", morseCode: "..." },
  { letter: "T", morseCode: "-" },
  { letter: "U", morseCode: "..-" },
  { letter: "V", morseCode: "...-" },
  { letter: "W", morseCode: ".--" },
  { letter: "X", morseCode: "-..-" },
  { letter: "Y", morseCode: "-.--" },
  { letter: "Z", morseCode: "--.." },
];

// ! ++++++++++ MORSE-TRANSLATOR ++++++++++

const output = document.querySelector(".output-morse");
const description = document.querySelector(".output-description");

const morseFunction = () => {
  const message = document.querySelector("input").value.toUpperCase();
  const messageArray = message.split("");
  console.log({ messageArray });
  messageArray.map((elm) => {
    const morseObj = morseAlphabet.find((obj) => obj.letter === elm);
    console.log({ morseObj });
    output.innerHTML += morseObj.morseCode;
    if (morseObj.letter == " ") {
      output.innerHTML += " / ";
      description.innerHTML += "<br>";
    } else {
      description.innerHTML += `${elm} = ${morseObj.morseCode}<br>`;
    }
  });
};

// ! ++++++++++ RESET ++++++++++

const resetFunction = () => {
  location.reload();
};
