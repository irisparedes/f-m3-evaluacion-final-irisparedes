import React, {Component} from 'react';

class Home extends Component {
    render() {
        const {cardsCharacters} = this.props;
        return (
            <ul className="list">
                {cardsCharacters.map(item => {
                    return (
                        <li className="card__li" key={item.id}>
                            <div className="card">
                                <div className="card__image">
                                    <img src={item.image} alt={item.name}/>
                                    <h2 className="name">{item.name}</h2>
                                    <h3 className="name__house">{item.house}</h3>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default Home;

