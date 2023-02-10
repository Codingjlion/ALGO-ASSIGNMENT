let sentenceLength = 0;
let wordCount = 0;
let vowelCount = 0;

const vowels = "AEIOUaeiou";

let sentence = "THE JLION WEARS.";

function readCharacter() {
  return sentence[sentenceLength];
}

let character = readCharacter();
while (character !== ".") {
  sentenceLength++;
  if (character === " ") {
    wordCount++;
  }
  if (vowels.includes(character)) {
    vowelCount++;
  }
  character = readCharacter();
}

wordCount++;

console.log("Sentence Length: " + sentenceLength);
console.log("Word Count: " + wordCount);
console.log("Vowel Count: " + vowelCount);
