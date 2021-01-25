import React from 'react';
import HelloWorld from './Components/HelloWorld'
import AppHeader from './Components/AppHeader'
import Footer from './Components/Footer'
import {
	BrowserRouter as Router,
            Switch,
            Route,
            Link
} from 'react-router-dom';


function App() {
  return (
    <div>
      
      <Router>

      <AppHeader/> 
      <HelloWorld name= "Mohit"/>

      <ul>
      	<li>
      		<Link to = "/" classnName = "text-blue-500"> Home </Link>
      	</li>
      </ul>

      <Footer/>

      </Router>
      
    </div>
  );
}

export default App;
