import React from 'react';
import './App.css';
import {fetchPotter} from './services/fetchPotter';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Card from './components/Card';

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
        <Switch>
          <Route exact path="/" render={() => <Home cardsCharacters={cards} />} />
          <Route path="/card"  component={Card}/>
        </Switch>  
      </div>
    );
  }
}

export default App;
