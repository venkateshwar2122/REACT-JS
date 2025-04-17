import { useState } from "react"


let App=()=>{

  let [data, setData] = useState("")
  let [arr, setArray ] = useState([])      /* arr initial value is empty array []        */


  let fun=(event)=>{
    setData(event.target.value)
  }

  let add=()=>{
    setArray([...arr,data])       /* in [...arr,data]   ...arr should always be written first and then "data" should be written */
    setData("")         /* to empty "data" value after pressing add button */
  }

  return(
    <div>
      <input type="text" onChange={fun} value={data}/>
      <button onClick={add} value={arr}>ADD</button>
      <ol>
        {
          arr.map((str)=><li>{str}</li>)

        }
      </ol>
    </div>
  )

}
export default App
