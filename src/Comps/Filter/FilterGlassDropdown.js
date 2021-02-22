import React, {Component} from 'react';

class FilterGlassDropdown extends Component {

    COCKTAIL_GLASSES_URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";

    constructor(props){
        super(props);
        this.state = {
            'glasses' : []
        };
    }

    componentDidMount() {
        fetch(this.COCKTAIL_GLASSES_URL)
        .then(response => response.json())
        .then(data => {
            var glasses = data['drinks'];
            glasses = glasses.map(elem => elem['strGlass']);
            this.setState({'glasses' : glasses});
        });
    }

    renderDropdown() {
        return (
            <select>
                {this.state['glasses'].map(element => <option key={element} value={element}>{element}</option>)}
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