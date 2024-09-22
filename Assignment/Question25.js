let words = ["Hello", "world", "this", "is", "JavaScript"];

let sentence = "";
for (let i = 0; i < words.length; i++) {
    sentence += words[i];
    if (i < words.length - 1) {
        sentence += " ";  
}
console.log(sentence);  