import React, {Component} from 'react';
import {COCKTAIL_GLASSES_URL, COCKTAIL_GLASSES_FILTER_URL, COCKTAIL_INFO_ID_URL} from '../Constants';

class FilterGlassDropdown extends Component {

    constructor(props){
        super(props);
        this.state = {
            glasses : [],
        };
        this.getCocktails = this.getCocktails.bind(this);
    }

    componentDidMount() {
        fetch(COCKTAIL_GLASSES_URL)
        .then(response => response.json())
        .then(data => {
            var glasses = data['drinks'];
            glasses = glasses.filter(elem => elem['strGlass'] !== '').map(elem => ({'value' : elem['strGlass'], 'label' : elem['strGlass']}));
            glasses.unshift({'value' : '', 'label' : '- Select Glass -'});
            this.setState({'glasses' : glasses});
        });
    }

    getCocktails(event) {
        var glass = event.target.value;
        if(glass !== ''){
            fetch(COCKTAIL_GLASSES_FILTER_URL + glass)
            .then(response => response.json())
            .then(data => {
                var IDs = data['drinks'].slice(0,10).map((id) => {return id['idDrink']});
                Promise.all(IDs.map((id) => fetch(COCKTAIL_INFO_ID_URL + id)))
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

    renderDropdown() {
        return (
            <select onChange={this.getCocktails}>
                {this.state['glasses'].map(element => <option key={element.value} value={element.value}>{element.label}</option>)}
            </select>
        );
    }

    render() {
        return (
            <div className="filter-glass-container">
                {this.renderDropdown()}
            </div>
        );
    }
}

export default FilterGlassDropdown;