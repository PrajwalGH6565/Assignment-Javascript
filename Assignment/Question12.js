
 let text = "JavaScript is a versatile programming language.";

 
 let wordExists = text.includes("versatile");


 console.log(wordExists);
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

console.log(removeFalsyValues([0, false, '', null, undefined]));