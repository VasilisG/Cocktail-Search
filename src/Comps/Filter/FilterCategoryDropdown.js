import React, {Component} from 'react';

class FilterCategoryDropdown extends Component {

    COCKTAIL_CATEGORIES_URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    COCKTAIL_CATEGORIES_FILTER_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";

    constructor(props) {
        super(props);
        this.state = {
            'categories': []
        };
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

    renderDropdown() {
        return (
            <select>
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