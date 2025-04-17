import { useState } from "react";


let App = () => {
 let [n, setN] = useState(0)       // initial value of n is 0
 let [f, setF] = useState(0)       // initial value of f is 0


 let fun = (event) => {
   setN(event.target.value);
 };


 let fact = () => {
   let num = parseInt(n);     // convert string input to number
   let x = 1;
   for (let i = 1; i <= num; i++) {
     x = x * i;
   }
   setF(x)
   setN("")
 }


 return (
   <div>
     <input type="number" onChange={fun} value={n} />        
     <button onClick={fact}>CALCULATE</button>
     <div>{f}</div>
   </div>
 )
}


export default App


