import React, {Component} from 'react';

class FilterTypeDropdown extends Component {

    render() {
        return (
            <div className="filter-type-container">
                <select>
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