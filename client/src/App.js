import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {TestPage, Home, MobilSignUpPage} from './pages'



const App = () => 
 
<Router>
  
      <div>
       <Route exact path ="/" component={Home}/>
       <Route exact path ="/TestPage" component={TestPage}/>
       <Route exact path ="/SignUp/cid=03" component={MobilSignUpPage}/>
      </div>

</Router>
    
export default App;