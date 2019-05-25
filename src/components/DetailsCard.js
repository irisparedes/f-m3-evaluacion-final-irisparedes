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
                    <div className="details">
                    <img src={character.image} alt={character.name} className="details-character-image"/>
                        <div className="details-character-info">

                        <h1 className="details-character-name">Name: {character.name}</h1>

                        {character.house ? 
                        <p className="details-character-house">Casa: {character.house}</p>
                        :
                        <p className="details-character-house">Casa: No pertenece a ninguna casa</p>
                        }

                        

                        {character.yearOfBirth ?
                        <p className="character-birthyear">Nacimiento: {character.yearOfBirth}</p>
                        :
                        <p className="character-birthyear">Nacimiento: Unknown</p>
                        }

                        {character.patronus ?
                        <p className="character-patronus">Patronus: {character.patronus}</p>
                        :
                        <p className="character-patronus">Patronus: Ninguno</p>              
                        }
 
                        {character.alive === true ? 
                        <p className="character__status">Estado: Vivo</p>
                        : 
                        <p className="character__status">Estado: DEP sustituir por icono</p>
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