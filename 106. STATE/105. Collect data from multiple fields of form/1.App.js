import { use, useState } from "react";

const App=()=>{
  let [a,setA] = useState([])
  let [obj,setObj]=useState({"name":"","dob":"","addr":"","gen":"","st":""})

  let fun=(e)=>{
    setObj({...obj,[e.target.name]:e.target.value})
  }

  let add=()=>{
    setA([...a,obj])
    setObj({"name":"","dob":"","addr":"","gen":"","st":""})
  }

  return(
    <div>
      <div className="form">
        <input type="text" name="name" onChange={fun} value={obj.name}/>
        <input type="date" name="dob" onChange={fun} value={obj.dob}/>
        <textarea name="addr" onChange={fun} value={obj.addr}/>

        <div>
          <input type="radio" name="gen" value="male" onChange={fun} checked={obj.gen=="male"}/>male
          <input type="radio" name="gen" value="female" onChange={fun} checked={obj.gen=="female"}/>female
        </div>


        <select onChange={fun} name="st" value={obj.st}>
          <option value="" disabled selected>---select---</option>
          <option value="ap">Andhra</option>
          <option value="tg">Telangana</option>

        </select>

        <button onClick={add}>Add</button>

      </div>

      {a.length>0 && <table>
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
              <td>{item.name}</td>
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
