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

        var dataId, dataType, dataAlcohol;

        fetch(this.INGREDIENT_URL + this.state.title)
        .then(response => response.json())
        .then(data => {
            data = data['ingredients'][0];

            dataId = data['idIngredient'] ? data['idIngredient'] : "-";
            dataType = data['strType'] ? data['strType'] : "-";
            dataAlcohol = data['strAlcohol'] ? data['strAlcohol'] : "-";

            this.setState({
                id : dataId,
                type : dataType,
                alcohol : dataAlcohol
            });
        })
    }

    render() {
        return (
            <div className="ingredient-item">
                <div className="ingredient-item-inner">
                    <div className="main-title">
                        <p className="item title">{this.state.title}</p>
                    </div>
                    <div className="main-info">
                        <div className="main-info-inner">
                            <p className="item type"><span>Alcohol type: </span>{this.state.type}</p>
                            <p className="item alcohol"><span>Is alcohol: </span>{this.state.alcohol}</p>
                            <p className="item id"><span>Ingredient ID: </span>{this.state.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IngredientItem;