import React from 'react';
import {
	BrowserRouter as Router,
            Switch,
            Route,
            Link
} from 'react-router-dom';
import HelloWorld from './Components/HelloWorld'
import AppHeader from './Components/AppHeader'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'




function App() {
  return (
    <div>
      
      <Router>

      <AppHeader/> 



      <div className="p-3">
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>

          <Route path = "/about">
            <About/>
          </Route>

          <Route path = "/products/:id">
            <Product/>
          </Route>
        </Switch>
      </div>


      <Footer/>

      </Router>
      
    </div>
  );
}

export default App;
