import React from 'react'
import API from '../utils/API'
// import { Nav } from '../components/Nav'

export class Home extends React.Component{

  constructor(props){
    super(props)

      this.state = {
      }
  }
  
  testRoute = id =>{
    API.saveOne("users",{first_name:"Jason", last_name:"Navarro",email:"NoEmail@yahoo.com",fbID:1})
    .then(res => console.log(res))
  }
  testRoute2 = id =>{
    API.getAll("users")
    .then(res => console.log(res))
  }
render(){

    return(
      <div>
       <button onClick={()=>this.testRoute(5)}>Create</button>
       <button onClick={()=>this.testRoute2(5)}>Get All</button>
      </div>
          )

 }
}
