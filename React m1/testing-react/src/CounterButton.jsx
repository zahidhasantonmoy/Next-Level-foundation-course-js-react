   import { useState } from "react";
   
   export default function CounterButton(){
        const [count , setCount]=useState(0);

        function click(){
            
            return setCount(count+1);
        }

        return (
            
            <>
            <div>
                <button onClick={click}>Click</button>
                <p>Clicked: {count}</p>
            </div>
            
            </>
        );
    }