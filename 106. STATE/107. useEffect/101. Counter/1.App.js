import { useEffect, useState } from "react";

const App=()=>{
  let [s1,setS1] = useState(0)
  let [s2,setS2] = useState(0)

  useEffect(()=>{
    console.log("component added")
  }, [])


  useEffect(()=>{
    console.log("component updated")
  },[s1,s2])

  useEffect(()=>{
    return ()=>{
      console.log("component removed")
    }
  },[])


  return(
    <div>
      <h2>{s1}</h2>
      <button onClick={()=>setS1(s1+1)}>COUNTER 1</button>
      <h2>{s2}</h2>
      <button onClick={()=>setS2(s2+1)}>COUNTER 2</button>
    </div>
  )


}

export default App
