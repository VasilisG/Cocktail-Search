import React, {Component} from 'react';
import FilterTypeDropdown from '../Comps/Filter/FilterTypeDropdown';
import FilterCategoryDropdown from '../Comps/Filter/FilterCategoryDropdown';
import FilterGlassDropdown from '../Comps/Filter/FilterGlassDropdown';

class FilterCockTail extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){

    }

    render(){
        return (
            <div className="filter-cocktail-container">
                <div className="filter-cocktail-title-container">
                    <h2>Filter cocktail</h2>
                </div>
                <div className="filter-cocktail-container-inner">
                    <FilterTypeDropdown/>
                    <FilterCategoryDropdown/>
                    <FilterGlassDropdown/>
                </div>
            </div>
        );
    }
}

export default FilterCockTail;