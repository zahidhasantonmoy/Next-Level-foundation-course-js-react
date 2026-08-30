let name;
let age;


function greetUser(age,name="Guest"){
    console.log(`Hello ${name}, you are ${age} years old`);

}
let greetUser1 =(name="Guest", age)=>{
    console.log(`Hello ${name}, you are ${age} years old`);
}

greetUser("zahid",20);
greetUser1("zahid",20);
greetUser(20);