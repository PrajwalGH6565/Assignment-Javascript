let colors = ["red", "green", "blue", "yellow", "purple"];

colors.splice(colors.indexOf("blue"), 1);  
console.log(colors);  

colors.splice(2, 0, "orange", "pink");  
console.log(colors);  
let subArray = colors.slice(0, 3);  
console.log(subArray);  
