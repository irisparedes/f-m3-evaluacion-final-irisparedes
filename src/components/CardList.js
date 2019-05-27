import React, {Component} from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/_cardList.scss';

class CardList extends Component {
    render() {
        const {cardsCharacters, queryName, paintHouse} = this.props;
        return (
            <div className="card__list">
                <ul className="list">
                    {cardsCharacters
                        .filter(item => item.name.toLowerCase().includes(queryName.toLowerCase()))
                        .map(item => {
                            return (
                                <li className="card__li" key={item.id}>
                                    <Link className="cardList__link" to={`/detailscard/${item.id}`}>
                                        <Card item={item} paintHouse={paintHouse}/>
                                    </Link>
                                </li>
                            );
                    })}
                </ul>
            </div>
           
        );
    }    
}

CardList.propTypes = {
    cardsCharacters: PropTypes.array,
    queryName: PropTypes.string,
    paintHouse: PropTypes.func
};

export default CardList;