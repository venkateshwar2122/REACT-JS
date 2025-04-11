let data = [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    "postId": 1,
    "id": 4,
    "name": "alias odio sit",
    "email": "Lew@alysha.tv",
    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  },
  {
    "postId": 1,
    "id": 5,
    "name": "vero eaque aliquid doloribus et culpa",
    "email": "Hayden@althea.biz",
    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  },
  {
    "postId": 95,
    "id": 6,
    "name": "natus consequatur deleniti ipsum delectus",
    "email": "Trey.Harber@christop.biz",
    "body": "tempora sint qui iste itaque non neque qui suscipit\nenim quas rerum totam impedit\nesse nulla praesentium natus explicabo doloremque atque maxime\nmollitia impedit dolorem occaecati officia in provident eos"
  },
  {
    "postId": 95,
    "id": 7,
    "name": "cumque consequuntur excepturi consequatur consequatur est",
    "email": "Kailyn@ivory.info",
    "body": "ut in nostrum\nut et incidunt et minus nulla perferendis libero delectus\nnulla nemo deleniti\ndeleniti facere autem vero velit non molestiae assumenda"
  },
  {
    "postId": 96,
    "id": 8,
    "name": "quia hic adipisci modi fuga aperiam",
    "email": "Amely.Kunde@rodrigo.co.uk",
    "body": "officia quas aut culpa eum\neaque quia rem unde ea quae reiciendis omnis\nexcepturi nemo est vel sequi accusantium tenetur at earum\net rerum quisquam temporibus cupiditate"
  },
  {
    "postId": 96,
    "id": 9,
    "name": "ut occaecati non",
    "email": "Thaddeus.Halvorson@ruthe.ca",
    "body": "nulla veniam quo consequuntur ullam\nautem nisi error aut facere distinctio rerum quia tempore\nvelit distinctio occaecati ducimus\nratione similique doloribus"
  },
  {
    "postId": 96,
    "id": 10,
    "name": "quo error dignissimos numquam qui nam fugit voluptates et",
    "email": "Hannah@emma.ca",
    "body": "non similique illo\nquia et rem placeat reprehenderit voluptas\nvelit officiis fugit blanditiis nihil\nab deserunt ullam"
  }
]


function App(){
  return(
    <div>
      <table border="1">

        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>BODY</th>
        </tr>

        {
          data.map((obj)=>{
            return(
            <tr>
              <td>{obj.id}</td>
              <td>{obj.name}</td>
              <td>{obj.email}</td>
              <td>{obj.body}</td>
            </tr>)
          })
        }
      </table>
    </div>
  )
}

export default App
