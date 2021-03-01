import React, {Component} from 'react';
import CockTailItem from '../Comps/CockTailItem';

class CocktailResults extends Component {

    render() {
        return this.props.cocktails.length > 0 ? (
            <div className="cocktail-items-container">
                <ul className="cocktail-items">
                    {this.props.cocktails.map((elem, index) => <CockTailItem key={index} info={elem}/>)}
                </ul>
            </div>
        ) : (
            <div className="cocktail-items-container"></div>
        )
    }
}

export default CocktailResults;