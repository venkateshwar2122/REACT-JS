import React from "react";
import { useState } from "react"             /* { useState } space b/w brackets and useState.    And  "S" is capital  */

const App=()=>{
  let[c,setC] = useState(0)

  let m = Math.floor(c/60)
  let s = c%60

  let[iid,setIid] = useState(-1)


  let inc=()=>{
    setC((c)=>c+1)
  }

  let st=()=>{
    if(iid==-1){
      setIid(setInterval(inc,1000 ))
    }
  }

  let stop=()=>{
    clearInterval(iid)
    setIid(-1)
  }

  let rs=()=>{
    clearInterval(iid)
    setIid(-1)
    setC(0)
  }


  return(
    <div>
      <div> {m<10?"0"+m:m} : {s<10?"0"+s:s} </div>

      <button onClick={st}>START</button>
      <button onClick={stop}>STOP</button>
      <button onClick={rs}>RESET</button>
    </div>
  )


}

export default App
