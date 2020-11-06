import React from 'react'
import './App.css';
import WebWrap from './Components/webWrap'
import SideBar from './Components/SideBar'
import About from './Components/About'
import {  Link ,Route ,BrowserRouter as Router,Switch} from 'react-router-dom'

function App() {
  return (
    <div>

<Router>

      
  
    
 
  <Switch>
          <Route path="/sidebar">
            <SideBar />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <WebWrap />
          </Route>
          
        </Switch>
  </Router>


    
     
    </div>
  );
}




export default App;
