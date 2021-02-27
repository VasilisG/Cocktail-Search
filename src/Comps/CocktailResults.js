import React, {Component} from 'react';

class CocktailResults extends Component {

    render() {
        return this.props.cocktails.length > 0 ? (
            <div className="cocktail-items-container">
                <ul className="cocktail-items">
                    {this.props.cocktails.map(elem => <li>Cocktail</li>)}
                </ul>
            </div>
        ) : (
            <div className="cocktail-items-container">
            </div>
        )
    }
}

export default CocktailResults;