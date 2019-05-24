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
       console.log(data);
      });
  }


  render() {
    return (
      <div className="App">
        <h1 className="title">Harry Potter Characters</h1>
        <label htmlFor="input"></label>
        <input type="text" className="input"/>
        <ul className="list">
          <li className="card__li">
            <div className="card">
              <div className="card__image">
                <img src="" alt=""/>
                <h2 className="name">Nombre Popoter</h2>
                <h3 className="name__house">casita</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
