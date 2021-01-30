import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="title-container">
                    <h1>Cocktail Junkie</h1>
                </div>
                <div className="navigation-container">
                    <nav className="navigation">
                        <ul className="nav-items">
                            <li className="nav-item">
                                <NavLink to="/home" activeClassName="active-nav-item">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/cocktails" activeClassName="active-nav-item">Cocktails</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/ingredients" activeClassName="active-nav-item">Ingredients</NavLink>
                            </li>
                        </ul>                
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;