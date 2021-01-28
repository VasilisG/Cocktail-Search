import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Link, Route, Redirect} from 'react-router-dom';
import Home from './Pages/Home';
import Cocktail from './Pages/Cocktail';
import Ingredient from './Pages/Ingredient';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="title-container">
                    <h1>Cocktail Junkie</h1>
                </div>
                <Router>
                    <div className="navigation-container">
                        <nav className="navigation">
                            <ul className="nav-items">
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cocktails">Cocktails</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/ingredients">Ingredients</Link>
                                </li>
                            </ul>                
                        </nav>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/home"/>
                            </Route>
                            <Route path="/home">
                                <Home/>
                            </Route>
                            <Route path="/cocktails">
                                <Cocktail/>
                            </Route>
                            <Route path="/ingredients">
                                <Ingredient/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </header>
        )
    }
}

export default Header;