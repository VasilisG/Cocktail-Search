import React, {Component} from 'react';
import {COCKTAIL_CATEGORIES_URL, COCKTAIL_CATEGORIES_FILTER_URL, COCKTAIL_INFO_ID_URL} from '../Constants';

class FilterCategoryDropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories : [],
        };
        this.getCocktails = this.getCocktails.bind(this);
    }

    componentDidMount() {
        fetch(COCKTAIL_CATEGORIES_URL)
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
            fetch(COCKTAIL_CATEGORIES_FILTER_URL + category)
            .then(response => response.json())
            .then(data => {
                var IDs = data['drinks'].slice(0,10).map((id) => {return id['idDrink']});
                Promise.all(IDs.map((id) => fetch(COCKTAIL_INFO_ID_URL + id)))
                .then((responses) => {
                    return Promise.all(responses.map(function (response) {
                        return response.json();
                    }));
                })
                .then((data) => {
                    data = data.map((elem) => elem['drinks'][0])
                        .map((elem) => { return {
                            'name' : elem['strDrink'],
                            'category' : elem['strCategory'],
                            'alcoholic' : elem['strAlcoholic'],
                            'instructions' : elem['strInstructions'],
                            'image' : elem['strDrinkThumb'] + '/preview'
                    }});
                    this.props.callBack(data);
                });
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