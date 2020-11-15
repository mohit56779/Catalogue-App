import React from 'react';
import HelloWorld from './Components/HelloWorld'
import AppHeader from './Components/AppHeader'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <AppHeader/> 

      <HelloWorld name= "Mohit"/>

      <Footer/>
      
    </div>
  );
}

export default App;
