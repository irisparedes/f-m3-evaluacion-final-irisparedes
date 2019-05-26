import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        const {item, paintHouse} = this.props;
        return (
            <React.Fragment>
                <img src={item.image} alt={item.name} className="card__image-character"/>
                <div className="card__info">
                    <h2 className="card__name">{item.name}</h2>
                    {item.house ? <img src={paintHouse(item)} alt={item.house} className="card__house" /> : <p>No pertenece a ninguna casa</p>}
                    <h3 className="card__name-house">{item.house}</h3>
                </div>
            </React.Fragment>
            
        );
    }    
}
Card.propTypes = {
    item: PropTypes.object,
    paintHouse: PropTypes.func
};

export default Card;