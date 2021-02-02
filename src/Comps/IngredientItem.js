import React, {Component} from 'react';

class IngredientItem extends Component {

    INGREDIENT_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=';

    constructor(props){
        super(props);
        this.state = {
            title : props.title,
            id : '',
            type : '',
            alcohol : ''
        };
    }

    componentDidMount() {
        fetch(this.INGREDIENT_URL + this.state.title)
        .then(response => response.json())
        .then(data => {
            data = data['ingredients'][0];
            this.setState({
                id : data['idIngredient'],
                type : data['strType'],
                alcohol : data['strAlcohol']
            });
        })
    }

    render() {
        return (
            <div className="ingredient-item">
                <div className="main">
                    <p className="item title">{this.state.title}</p>
                    <p className="item type">{this.state.type}</p>
                    <p className="item alcohol">{this.state.alcohol}</p>
                    <p className="item id">{this.state.id}</p>
                </div>
            </div>
        )
    }
}

export default IngredientItem;