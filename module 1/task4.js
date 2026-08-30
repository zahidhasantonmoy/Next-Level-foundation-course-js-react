let correctUsername = "admin";
let correctPassword = "1234";

let username = "admin";
let password = "1234";

if(username==correctUsername && password==correctPassword){
    console.log("Login Successful") 
}
else if (username==correctUsername || password==correctPassword){
    if(username==!correctUsername){
        console.log("Wrong Username")
    }
    else{
        console.log("Wrong Password")
    }
}
else{
    console.log("Invalid Credentials")
}