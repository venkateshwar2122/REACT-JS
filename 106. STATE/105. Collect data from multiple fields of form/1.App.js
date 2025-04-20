import { useState } from "react";

const App=()=>{
  let [a,setA] = useState([])
  let [obj,setObj]=useState({"stuname":"","dob":"","addr":"","gen":"","st":""})

  let fun=(e)=>{
    setObj({...obj,[e.target.name]:e.target.value})            /* [e.target.name] is in brackets because we are setting key values dynamically */
  }

  let add=()=>{ 
    setA([...a,obj])                                                     /* array "a" is maintaing all records */
    setObj({"stuname":"","dob":"","addr":"","gen":"","st":""})             /* after selecting all fields and adding we have to reset the fields */
  }

  return(
    <div>
      <div className="form">
        <input type="text" name="stuname" onChange={fun} value={obj.stuname}/>        {/* whenever u are using "onchange" then use "value" compulosrily */}
        <input type="date" name="dob" onChange={fun} value={obj.dob}/>
        <textarea name="addr" onChange={fun} value={obj.addr}/>

        <div>
          <input type="radio" name="gen" value="male" onChange={fun} checked={obj.gen=="male"}/>male        {/* this is radio button , therfore in place of "value" we are using "checked" */}
          <input type="radio" name="gen" value="female" onChange={fun} checked={obj.gen=="female"}/>female
        </div>


        <select onChange={fun} name="st" value={obj.st}>                         {/* drop down list*/}
          <option value="" disabled selected>---select---</option>
          <option value="ap">Andhra</option>
          <option value="tg">Telangana</option>

        </select>

        <button onClick={add}>Add</button>

      </div>

      {a.length>0 && <table>                               {/* if a.length>0 then only show table otherwise not */ }
        <tr>
          <th>SNO</th>
          <th>NAME</th>
          <th>DOB</th>
          <th>ADDR</th>
          <th>GENDER</th>
          <th>STATE</th>
        </tr>

        {
          a.map((item,index)=>{
            return(<tr>
              <td>{index+1}</td>
              <td>{item.stuname}</td>
              <td>{item.dob}</td>
              <td>{item.addr}</td>
              <td>{item.gen}</td>
              <td>{item.st}</td>
            </tr>)
          })
        }
        
      </table> }

    </div>
  )
}
export default App
