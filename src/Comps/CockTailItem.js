import React, {Component} from 'react';

class CockTailItem extends Component {

    render() {
        return (
            <li className="cocktail-item">
                <div className="image">
                    <img src={this.props.info.image} alt={this.props.info.name}/>
                </div>
                <div className="info">
                    <h2 className="title"><strong>Title:</strong> {this.props.info.name}</h2>
                    <p className="category"><strong>Category:</strong> {this.props.info.category}</p>
                    <p className="type"><strong>Type:</strong> {this.props.info.alcoholic}</p>
                    <p className="instructions"><strong>Instructions:</strong> {this.props.info.instructions}</p>
                </div>
            </li>
        );
    }
}

export default CockTailItem;