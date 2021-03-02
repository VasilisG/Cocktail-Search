import React, {Component} from 'react';

class FilterTypeDropdown extends Component {

    COCKTAIL_TYPE_FILTER_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=";
    COCKTAIL_INFO_ID_URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

    constructor(){
        super();
        this.getCocktails = this.getCocktails.bind(this);
    }

    getCocktails(event){
        var type = event.target.value;
        if(type !== ""){
            fetch(this.COCKTAIL_TYPE_FILTER_URL + type)
            .then(response => response.json())
            .then(data => {
                var IDs = data['drinks'].slice(0,10).map((id) => {return id['idDrink']});
                Promise.all(IDs.map((id) => fetch(this.COCKTAIL_INFO_ID_URL + id)))
                .then((responses) => {
                    return Promise.all(responses.map(function (response) {
                        return response.json();
                    }));
                })
                .then((data) => {
                    data = data.map((elem) => elem['drinks'][0])
                        .map((elem) => { return {
                            'name' : elem['strDrink'],
                            'category' : elem['strCategory'],
                            'alcoholic' : elem['strAlcoholic'],
                            'instructions' : elem['strInstructions'],
                            'image' : elem['strDrinkThumb'] + '/preview'
                    }});
                    this.props.callBack(data);
                });
            });
        }
    }

    render() {
        return (
            <div className="filter-type-container">
                <select onChange={this.getCocktails}>
                    <option value="">- Select Type -</option>
                    <option value="Alcoholic">Alcoholic</option>
                    <option value="Non_Alcoholic">Non alcoholic</option>
                </select>
            </div>
        );
    }
}

export default FilterTypeDropdown;