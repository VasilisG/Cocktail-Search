import React, {Component} from 'react';
import FilterTypeDropdown from '../Comps/Filter/FilterTypeDropdown';
import FilterCategoryDropdown from '../Comps/Filter/FilterCategoryDropdown';
import FilterGlassDropdown from '../Comps/Filter/FilterGlassDropdown';

class FilterCockTail extends Component {

    setCocktails(cocktails){
        this.props.callBack(cocktails);
    }

    render(){
        return (
            <div className="filter-cocktail-container">
                <div className="filter-cocktail-title-container">
                    <h2>Filter cocktail</h2>
                </div>
                <div className="filter-cocktail-container-inner">
                    <FilterTypeDropdown callBack={this.setCocktails.bind(this)}/>
                    <FilterCategoryDropdown callBack={this.setCocktails.bind(this)}/>
                    <FilterGlassDropdown callBack={this.setCocktails.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default FilterCockTail;