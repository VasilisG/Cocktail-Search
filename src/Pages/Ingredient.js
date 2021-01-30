import React, {Component} from 'react';

class Ingredient extends Component {

    constructor(){
        super();
        this.state = {
            'url' : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
            'ingredients' : []
        };
    }
    
    componentDidMount() {
        var url = this.state['url'];
        if(!this.state['ingredients'].length){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                var result = data['drinks'];
                this.setState({'ingredients' : result});
            });
        }
    }

    ingredientsItems() {
        var ingredients = [...this.state['ingredients']];
        return ingredients.map(elem => <div className="ingredient-item" key={elem['strIngredient1']}>{elem['strIngredient1']}</div>);
    }

    render(){
        return (
            <main>
                <h1 className="page-title">Ingredients</h1>
                <div className="ingredient-list">
                    {this.ingredientsItems()}
                </div>
            </main>
        );
    }
}

export default Ingredient;

/**
 * List all ingredients and their info.
 */