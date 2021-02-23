import React, {Component} from 'react';

class SearchCockTail extends Component {

    SEARCH_BY_NAME_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    SEARCH_BY_LETTER_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
    GET_RANDOM_COCKTAIL_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

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
            var drinks = data['drinks'].slice(0,10);
            drinks = drinks.map(function(drink) {
                return {
                    'name' : drink['strDrink'],
                    'category' : drink['strCategory'],
                    'alcoholic' : drink['strAlcoholic'],
                    'instructions' : drink['strInstructions'],
                    'image' : drink['strDrinkThumb']
                }
            });
            this.setState({drinks : drinks});
            console.log(this.state);
        });
    }

    searchByName(event) {
        var fieldName = this.state.name;
        if(fieldName.length > 0){
            this.fetchCocktails(this.SEARCH_BY_NAME_URL + fieldName)
        }
        event.preventDefault();
    }

    searchByLetter(event){
        this.fetchCocktails(this.SEARCH_BY_LETTER_URL + event.target.value)
    }

    getRandomCocktail() {
        this.fetchCocktails(this.GET_RANDOM_COCKTAIL_URL);
    }

    getDrinks() {
        return this.state.drinks;
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
                        <button className="cocktail-name-search-button">Search</button>
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