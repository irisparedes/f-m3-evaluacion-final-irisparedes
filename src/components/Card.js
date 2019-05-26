import React, {Component} from 'react';

class Card extends Component {
    render() {
        const {item} = this.props;
        // console.log(this.props.match)
        // console.log(this.props.cardsCharacters);
        return (
            <React.Fragment>
                <img src={item.image} alt={item.name} className="card__image-character"/>
                <div className="card__info">
                    <h2 className="card__name">{item.name}</h2>
                    <h3 className="card__name-house">{item.house}</h3>
                </div>
            </React.Fragment>
            
        );
    }    
}


export default Card;