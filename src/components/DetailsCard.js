import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class DetailsCard extends Component {

    componentWillUnmount() {
        this.props.resetFilters();
    }

    render() {
        const {match, cardsCharacters} = this.props;
        const id = parseInt(match.params.id);
        const character = cardsCharacters.find(item => item.id === id)
        return (
            <React.Fragment>
               {character ?
                    <div className="details__card">
                    <img src={character.image} alt={character.name} className="details__image"/>
                        <div className="details__character">

                        <h1 className="details__name">{character.name}</h1>

                        {character.house ? 
                        <p className="details__house">Casa: {character.house}</p>
                        :
                        <p className="details__house">Casa: No pertenece a ninguna casa</p>
                        }

                        {character.yearOfBirth ?
                        <p className="details__year">Nacimiento: {character.yearOfBirth}</p>
                        :
                        <p className="details__year">Nacimiento: Unknown</p>
                        }

                        {character.patronus ?
                        <p className="details__patronus">Patronus: {character.patronus}</p>
                        :
                        <p className="details__patronus">Patronus: Ninguno</p>              
                        }
 
                        {character.alive === true ? 
                        <p className="details__status">Estado: Vivo</p>
                        : 
                        <p className="details__status">Estado: <span className="calavera">☠</span></p>
                        }
                        </div>

                        <Link to="/" className="details__back-link">Volver</Link>
                    </div>
                        :
                        <p>No hay información</p>
                } 
            </React.Fragment>
        );
    }    
}

DetailsCard.propTypes = {
    match: PropTypes.object,
    cardsCharacters: PropTypes.array,
    resetFilters: PropTypes.func
};

export default DetailsCard;