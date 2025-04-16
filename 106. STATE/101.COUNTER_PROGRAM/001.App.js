import React, { useState } from "react";

const App = () => {
  const [c, setC] = useState(0); /* 🔁 declare state.. 0 is iniytial value of "c"   */

  const inc = () => {
    setC(c + 1); // ✅ updates state, triggers re-render
    console.log(c + 1); /* logs the updated value (note: c is stale until re-render).. This console.log() value u can see in INSPECT */
  };

  return (
    <div>
      <h1>{c}</h1>
      <button onClick={inc}>INC</button> 
    </div>
  );
};

export default App
