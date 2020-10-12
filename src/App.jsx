import React, { Component } from 'react';
import NavBar from './Components/Navbar';
import Cards from './Components/Cards';
import Footer from './Components/footer';
import Filter from './Components/filters'

import './App.css';


class App extends Component {
  render(){
    return(
      <div>
        <NavBar/>
        <Filter/>
        <Cards/>
        <Footer/>
        
      </div>

    );
  } 
}

export default App;
