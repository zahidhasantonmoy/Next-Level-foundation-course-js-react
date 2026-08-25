let food = 500;
let transport = 300;
let shopping = 1200;
let internet = 500;
 function calculateTotal(){
    let total=food+transport+shopping+internet;
    return total;
 }
 let totalAmount=calculateTotal();
 let check=(totalAmount)=>{
    if(totalAmount<1000){
        console.log("low expence")
    } else if(totalAmount>=1001 && totalAmount<=3000){
        console.log("mediam");
    }
    else{
        console.log("high amount")
 }
 }