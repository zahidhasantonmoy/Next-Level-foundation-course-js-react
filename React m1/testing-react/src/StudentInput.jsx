import { useState } from "react";
export default function StudentInput(){

  const [name, setName]=useState("");
  function inputName(input){
    setName(input.target.value);
  }
  
   return (
    <>
    <div>
     <p>Input Your name </p>
    <input type="text"  value={name} onChange={inputName} />
    <p>You are {name}</p>

    </div>
    
    
    </>
   );



}
