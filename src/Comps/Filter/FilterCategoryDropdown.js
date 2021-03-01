import React, {Component} from 'react';

class FilterCategoryDropdown extends Component {

    COCKTAIL_CATEGORIES_URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    COCKTAIL_CATEGORIES_FILTER_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";

    constructor(props) {
        super(props);
        this.state = {
            categories : [],
        };
        this.getCocktails = this.getCocktails.bind(this);
    }

    componentDidMount() {
        fetch(this.COCKTAIL_CATEGORIES_URL)
        .then(response => response.json())
        .then(data => {
            var drinks = data['drinks'];
            drinks = drinks.filter(elem => elem['strCategory'] !== '').map(elem => ({'value' : elem['strCategory'], 'label' : elem['strCategory']}));
            drinks.unshift({'value' : '', 'label' : '- Select Category -'});
            this.setState({'categories' : drinks});
        });
    }

    getCocktails(event){
        var category = event.target.value;
        if(category !== ''){
            fetch(this.COCKTAIL_CATEGORIES_FILTER_URL + category)
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

    renderDropdown() {
        return (
            <select onChange={this.getCocktails}>
                {this.state['categories'].map(element => <option key={element.value} value={element.value}>{element.label}</option>)}
            </select>
        );
    }

    render() {
        return (
            <div className="filter-category-container">
                {this.renderDropdown()}
            </div>
        );
    }
}

export default FilterCategoryDropdown;