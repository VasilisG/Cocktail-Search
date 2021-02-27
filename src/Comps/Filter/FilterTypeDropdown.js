import React, {Component} from 'react';

class FilterTypeDropdown extends Component {

    COCKTAIL_TYPE_FILTER_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=";

    constructor(props){
        super(props);
        this.state = {
            drinks : []
        };
    }

    getCocktails(event){
        var type = event.type.value;
        fetch(this.COCKTAIL_TYPE_FILTER_URL + type)
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
            this.props.getCocktails(drinks);
        });
    }

    render() {
        return (
            <div className="filter-type-container">
                <select>
                    <option value="">- Select Type -</option>
                    <option value="alcohol">Alcohol</option>
                    <option value="category">Category</option>
                    <option value="ingredient">Ingredient</option>
                    <option value="glass">Glass</option>
                </select>
            </div>
        );
    }
}

export default FilterTypeDropdown;