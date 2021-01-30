import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Pages/Home';
import Cocktail from './Pages/Cocktail';
import Ingredient from './Pages/Ingredient';

class App extends Component {

  render() {
    return (
      <Router>
          <Header/>
          <Route exact path="/"><Redirect to="/home"/></Route>
          <Route path="/home"><Home/></Route>
          <Route path="/cocktails"><Cocktail/></Route>
          <Route path="/ingredients"><Ingredient/></Route>
          <Footer/>
      </Router>
    );
  }
}

export default App;

// npm install react-router-dom
// https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121/