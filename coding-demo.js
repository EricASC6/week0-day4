// The problem is to obtain an array of single letters in lower case
// cleaned up of punctuation signs

const rawText = 
    "Judge connected on the first pitch from Ryne Stanak (0-2) to give him nine career multihomer games. ";

const alphachar = ['abcdefghijklmnopqrstuvwxyz'];

function singleArray(str) {
    const result = [];
    let stringLower = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {              
        const char = str[i];
        // Checks if the string is an integer
        if (Number.isInteger(parseInt(char, 10))) {
            char = " ";
        // Checks if the string is an alpha character
        } else if (alphachar.includes(char) === false) {
            char = " ";
        } else if (char === " ") {
            char === " ";
        }
    }
}

