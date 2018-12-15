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
    API.getOne("home", id)
    .then(res => console.log(res))
     
    
  }
 
render(){

    return(

       <button onClick={()=>this.testRoute(5)}>Hello World</button>
        
          )

 }
}
