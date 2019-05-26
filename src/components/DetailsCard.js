import React, {Component} from 'react';


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
                        <p className="details__status">Estado: DEP sustituir por icono</p>
                        }
                        </div>
                    </div>
            :
            <p>No hay información</p>

        } 
            </React.Fragment>

       
        );
    }    
}


export default DetailsCard;