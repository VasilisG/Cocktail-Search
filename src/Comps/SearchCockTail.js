import React, {Component} from 'react';
import {SEARCH_BY_NAME_URL, SEARCH_BY_LETTER_URL, GET_RANDOM_COCKTAIL_URL} from './Constants';

class SearchCockTail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastSearchName : '',
            drinks : []
        };

        this.searchByName = this.searchByName.bind(this);
        this.searchByLetter = this.searchByLetter.bind(this);
        this.getRandomCocktail = this.getRandomCocktail.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({lastSearchName : event.target.value});
    }

    fetchCocktails(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            var drinks = [];
            if(data['drinks'] != null){
                drinks = data['drinks'].slice(0,10).map(function(drink) {
                    return {
                        'name' : drink['strDrink'],
                        'category' : drink['strCategory'],
                        'alcoholic' : drink['strAlcoholic'],
                        'instructions' : drink['strInstructions'],
                        'image' : drink['strDrinkThumb'] + '/preview'
                    }
                });
            }
            this.setState({drinks : drinks});
            this.props.callBack(drinks);
        });
    }

    searchByName(event) {
        event.preventDefault();
        if(this.state.lastSearchName.length > 0){
            this.fetchCocktails(SEARCH_BY_NAME_URL + this.state.lastSearchName);
        }
    }

    searchByLetter(event){
        this.fetchCocktails(SEARCH_BY_LETTER_URL + event.target.value)
    }

    getRandomCocktail() {
        this.fetchCocktails(GET_RANDOM_COCKTAIL_URL);
    }

    render(){
        const letterButtons = 'abcdefghijklmnopqrstuvwxyz'.split('').map((elem) => 
            <button key={elem} className="cocktail-letter" value={elem} onClick={this.searchByLetter}>{elem.toUpperCase()}</button>
        )

        return (
            <div className="search-cocktail-container">
                <div className="search-inner-container">
                    <form className="search-cocktail-form" onSubmit={this.searchByName}>
                        <input type="text" className="cocktail-name-input" placeholder="Enter cocktail name..." onChange={this.handleChange}/>
                        <button className="cocktail-name-search-button" onClick={this.searchByName}>Search</button>
                    </form>
                    <div className="random-cocktail-container">
                        <button className="random-cocktail" onClick={this.getRandomCocktail}>Pick a random cocktail</button>
                    </div>
                </div>
                <div className="cocktail-alphabet">
                    <div className="cocktail-alphabet-title-container">
                        <p className="cocktail-alphabet-title">Get cocktails by letter:</p>
                    </div>
                    <div className="cocktail-letter-container">
                        <div className="cocktail-letter-inner-container">
                            {letterButtons}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchCockTail;