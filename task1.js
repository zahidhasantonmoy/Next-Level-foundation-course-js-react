const name="Zahid HAsan";
const age=26;
const city="Dhaka";
const isStudent=true;
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(city));
console.log(typeof(isStudent));
console.log(`Name:${name} Age:${age} City: ${city} IsStudent: ${isStudent}`);

if(age>=18){
    console.log("Yes You are 18+");
}
if(isStudent){
    console.log("Truthy");
}
else{
    console.log("falsy");
}