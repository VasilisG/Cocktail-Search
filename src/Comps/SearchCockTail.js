import React, {Component} from 'react';

class SearchCockTail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'name': '',
            'letter': '',
            'ingredients': []
        };
    }

    render(){
        return (
            <div className="search-cocktail-container">
                <div className="search-inner-container">
                    <form className="search-cocktail-form">
                        <input type="text" className="cocktail-name-input" placeholder="Enter cocktail name..."/>
                        <button className="cocktail-name-search-button">Search</button>
                    </form>
                    <div className="random-cocktail-container">
                        <button className="random-cocktail">Pick a random cocktail</button>
                    </div>
                </div>
                <div className="cocktail-alphabet">
                    <div className="cocktail-alphabet-title-container">
                        <p className="cocktail-alphabet-title">Get cocktails by letter:</p>
                    </div>
                    <div className="cocktail-letter-container">
                        <div className="cocktail-letter-inner-container">
                            {'abcdefghijklmnopqrstuvwxyz'.split('').map((elem) => <button key={elem} className="cocktail-letter" letter={elem}>{elem.toUpperCase()}</button>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchCockTail;