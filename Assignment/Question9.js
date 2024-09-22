let sentence="The weather is warm and sunny";
let wordToFind="sunny";
let position=sentence.indexOf(wordToFind);
console.log(`${position}`);
let updatedSentence=sentence.replace(wordToFind,"rainy");
console.log(updatedSentence);