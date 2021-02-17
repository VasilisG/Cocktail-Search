import React, {Component} from 'react';

class FilterCockTail extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){

    }

    render(){
        return (
            <div class="filter-cocktail-container">
                <div class="filter-cocktail-title-container">
                    <h2>Filter cocktail</h2>
                </div>
                <div class="filter-cocktail-container-inner">
                    <div class="filter-type-container">
                        <select>
                            <option value="alcohol">Alcohol</option>
                            <option value="category">Category</option>
                            <option value="ingredient">Ingredient</option>
                            <option value="glass">Glass</option>
                        </select>
                    </div>
                    <div class="filter-option-container">

                    </div>
                </div>
            </div>
        );
    }
}

export default FilterCockTail;