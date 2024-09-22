 let sentence="JavaScript is a versatile and powerful programming language used in web development.";
let slicedPortion=sentence.slice(0,37);
 console.log(slicedPortion);

 let substringPortion = sentence.substring(0,37 );
 console.log("Substring Portion:", substringPortion);

 let substrPortion = sentence.substr(0, 37);
 console.log("Substr Portion:", substrPortion);


 
let wordsArray = sentence.split(" ");


let extractedWords = wordsArray.join(" ");
console.log(extractedWords);
