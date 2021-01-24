import React, {Component} from 'react';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="title-container">
                    <h1>Cocktail Junkie</h1>
                </div>
                <div class="navigation-container">
                    <nav className="navigation">
                        <ul className="nav-items">
                            <li className="nav-item">
                                <a href="\cocktail">Cocktails</a>
                            </li>
                            <li className="nav-item">
                                <a href="\ingredient">Ingredients</a>
                            </li>
                        </ul>                
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;