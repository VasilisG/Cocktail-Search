import React, {Component} from 'react';

class FilterCategoryDropdown extends Component {

    COCKTAIL_CATEGORIES_URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

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
            drinks = drinks.map(elem => elem['strCategory']);
            this.setState({'categories' : drinks});
        });
    }

    renderDropdown() {
        return (
            <select>
                {this.state['categories'].map(element => <option key={element} value={element}>{element}</option>)}
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