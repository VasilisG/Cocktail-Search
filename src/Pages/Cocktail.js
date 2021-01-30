import React, {Component} from 'react';

class Cocktail extends Component {
    render(){
        return (
            <main>
                <h1 className="page-title">Cocktail Page</h1>
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