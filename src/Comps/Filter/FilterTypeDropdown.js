import React, {Component} from 'react';

class FilterTypeDropdown extends Component {

    COCKTAIL_TYPE_FILTER_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=";

    constructor(){
        super();
        this.getCocktails = this.getCocktails.bind(this);
    }

    getCocktails(event){
        var type = event.target.value;
        if(type !== ""){
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
                        'image' : drink['strDrinkThumb'] + '/preview'
                    }
                });
                this.props.callBack(drinks);
            });
        }
    }

    render() {
        return (
            <div className="filter-type-container">
                <select onChange={this.getCocktails}>
                    <option value="">- Select Type -</option>
                    <option value="Alcoholic">Alcoholic</option>
                    <option value="Non_Alcoholic">Non alcoholic</option>
                </select>
            </div>
        );
    }
}

export default FilterTypeDropdown;