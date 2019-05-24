import React from 'react';
import './App.css';
import {fetchPotter} from './services/fetchPotter';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.getCards();
  }

  getCards() {
    fetchPotter()
      .then(data => {

        const newCards = data.map((item, index) => {
          return {...item, id: index}
        });



       this.setState({
         cards: newCards
       });
      });
  }


  render() {
    const {cards} = this.state;
    return (
      <div className="App">
        <h1 className="title">Harry Potter Characters</h1>
        <label htmlFor="input"></label>
        <input type="text" className="input"/>
        <ul className="list">
          {cards.map(item => {
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
            )
          })}
          
        </ul>
      </div>
    );
  }
}

export default App;
