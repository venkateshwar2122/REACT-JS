import {useState} from "react"


let App=()=>{
 let [data,setData]=useState("")           /* initial value of data is empty string("")                   */

 let fun=(event)=>{
   setData(event.target.value)
 }


return(
 <div>
   <input type="text" onChange={fun}/>
   <div>{data}</div>
 </div>
)

}


export default App
