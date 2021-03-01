import React, {Component} from 'react';

class FilterGlassDropdown extends Component {

    COCKTAIL_GLASSES_URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";
    COCKTAIL_GLASSES_FILTER_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=";

    constructor(props){
        super(props);
        this.state = {
            glasses : [],
        };
        this.getCocktails = this.getCocktails.bind(this);
    }

    componentDidMount() {
        fetch(this.COCKTAIL_GLASSES_URL)
        .then(response => response.json())
        .then(data => {
            var glasses = data['drinks'];
            glasses = glasses.filter(elem => elem['strGlass'] !== '').map(elem => ({'value' : elem['strGlass'], 'label' : elem['strGlass']}));
            glasses.unshift({'value' : '', 'label' : '- Select Glass -'});
            this.setState({'glasses' : glasses});
        });
    }

    getCocktails(event) {
        var glass = event.target.value;
        if(glass !== ''){
            fetch(this.COCKTAIL_GLASSES_FILTER_URL + glass)
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
                {this.state['glasses'].map(element => <option key={element.value} value={element.value}>{element.label}</option>)}
            </select>
        );
    }

    render() {
        return (
            <div className="filter-glass-container">
                {this.renderDropdown()}
            </div>
        );
    }
}

export default FilterGlassDropdown;