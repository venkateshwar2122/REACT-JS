function App(){
  let a = [{"id":101,"name":"param","age":20},
           {"id":102,"name":"karan","age":21},
           {"id":103,"name":"venkatesh","age":22},
           {"id":104,"name":"henil","age":23},
           {"id":105,"name":"omkar","age":24}
          ]


  return(<div>
    {
      a.map((obj)=>{
        return(<div>
          <p>Name:{obj.name}</p>
          <p>Age:{obj.age}</p>
        </div>)   /* end of return of map */
      })          /* end of map fxn */
    }
  </div>)    /* end of return of fxn */

}       /* end of function App */

export default App
