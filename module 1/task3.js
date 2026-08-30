const marks = 76;

if(marks >= 80) {
    console.log("A+");
} else if(marks >= 70) {
    console.log("A");
} else if(marks >= 60) {
    console.log("A-");
} else if(marks >= 50) {
    console.log("B");
} else if(marks >= 40) {
    console.log("C");
} 
else if(marks>=100 || marks<=0){
    console.log("Invalid ")
}
else {
    console.log("F");
}   
let turn=(marks>=80) ? "A+": "Not A+"
console.log(turn);