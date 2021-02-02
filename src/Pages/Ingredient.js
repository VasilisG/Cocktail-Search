import React, {Component} from 'react';
import IngredientItem from '../Comps/IngredientItem';

class Ingredient extends Component {

    INGREDIENTS_LIST_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

    constructor(){
        super();
        this.state = {
            'ingredients' : []
        };
    }
    
    componentDidMount() {
        fetch(this.INGREDIENTS_LIST_URL)
        .then(response => response.json())
        .then(data => {
            var result = data['drinks'].slice(0, 16);
            this.setState({'ingredients' : result});
        });
    }

    render(){
        return (
            <main>
                <h1 class="page-title">Ingredients</h1>
                <div class="ingredient-list">
                    {this.state['ingredients'].map((elem, index) => <IngredientItem key={index} title={elem['strIngredient1']}/>)}
                </div>
            </main>
        );
    }
}

export default Ingredient;

/**
 * List all ingredients and their info.
 */