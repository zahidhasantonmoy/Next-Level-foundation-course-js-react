// age < 13
// → Child

// 13–17
// → Teenager

// 18–59
// → Adult

// 60+
// → Senior Citizen


let age=20;

if(age<13){
    console.log("You are child ");
}
else if ( age>=13 && age<=17){
    console.log(" You are teenager");
}
else if (age>=18 && age<=59){
    console.log("you are adult");
}
else(
    console.log("you are sinior")
)

let turn =(age>=18) ? "Allowed": "Not Allowed"
console.log(turn);


switch(true){
    case(age<13):
    console.log("child");
    break;
    case( age>=13 && age<=17):
    console.log(" You are teenager");
    break;
    case(age>=18 && age<=59):
    console.log("you are adult");
    break;
    case(age>=60):
    console.log("you are sinor");
    break;
     
}