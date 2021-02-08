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
            <div class="search-cocktail-container">
                <div class="search-inner-container">
                    <form class="search-cocktail-form">
                        <input type="text" class="cocktail-name-input" placeholder="Enter cocktail name..."/>
                        <button class="cocktail-name-search-button">Search</button>
                    </form>
                    <div class="random-cocktail-container">
                        <button class="random-cocktail">Pick a random cocktail</button>
                    </div>
                </div>
                <div class="cocktail-alphabet">
                    <div class="cocktail-alphabet-title-container">
                        <p class="cocktail-alphabet-title">Get cocktails by letter:</p>
                    </div>
                    <div class="cocktail-letter-container">
                        <div class="cocktail-letter-inner-container">
                            {'abcdefghijklmnopqrstuvwxyz'.split('').map((elem) => <button class="cocktail-letter" letter={elem}>{elem.toUpperCase()}</button>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchCockTail;