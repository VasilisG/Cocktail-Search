import React, {Component} from 'react';
import SearchCockTail from '../Comps/SearchCockTail';
import FilterCockTail from '../Comps/FilterCockTail';
import CocktailResults from '../Comps/CocktailResults';

class Cocktail extends Component {
    render(){
        return (
            <main>
                <h1 className="page-title">Cocktails</h1>
                <SearchCockTail/>
                <FilterCockTail/>
                <CocktailResults/>
            </main>
        );
    }
}

export default Cocktail;

/**
 * Search by:
 * 
 * Name
 * Letter
 * Ingredient (List)
 * 
 * Filter by:
 * 
 * Alcoholic / Non alcoholic (List)
 * Category (List)
 * Glass (List)
 * 
 * Get random cocktail
 */